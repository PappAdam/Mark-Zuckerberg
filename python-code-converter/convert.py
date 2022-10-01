import sys

c_orange = "#EE4F16"
c_black = "#262523"
c_grey = "#4d4a46"
c_dark_grey = "#353330"
c_light_grey = "#85807a"
c_blue = "#00798C"
c_white = "#F7F4ED"

def convert_row_into_html_paragraph(row: str) -> str:
    type_keywords = ['bool', 'u8', 'u16', 'u32', 'u64', 'u128', 'usize', 'i8', 'i16', 'i32', 'i64', 'i128', 'isize']
    
    parsed_row = "<p>"

    row = row.split(' ');

    start_str = -1
    comment = False
    for word in row:
        if '//' in word:
            comment = True
            parsed_row += f"<span style='color: {c_grey}'>"

        if comment:
            parsed_row += word
        else:
            try:
                int_w = int(word.replace(";", ""))
                if ';' in word:
                    parsed_row += f"<span style='color: {c_light_grey}'>{int_w}<span>;"
                else:
                    parsed_row += f"<span style='color: {c_light_grey}'>{word}</span>;"
            except:
                if word.replace(";", '') == 'true' or word.replace(";", "") == 'false':
                    if ';' in word:
                        parsed_row += f"<span style='color: {c_light_grey}'>{word.replace(';', '')}</span>;"
                    else:
                        parsed_row += f"<span style='color: {c_light_grey}'>{word}</span>"
                elif word == 'fn' or word == 'let':
                    parsed_row += f"<span style='color: {c_blue}'>{word} </span>"
                elif word in type_keywords and start_str == -1:
                    parsed_row += f"<span style='color: {c_orange}'>{word} </span>"
                else:
                    if "\"" in word:
                        for l in range(len(word)):
                            if word[l] == "\"" and start_str == -1:
                                parsed_row += f"{word[0:l]}<span style='color: {c_grey}'>"
                                start_str = l
                            elif word[l] == "\"":
                                parsed_row += f"{word[start_str:l+1]}</span>"
                                start_str = -1
                            elif l == len(word)-1 and start_str == -1:
                                parsed_row += f"{word[start_str-1:l+1]} "
                            elif l == len(word)-1 and start_str != -1:
                                parsed_row += f"{word[start_str:l+1]} "
                                start_str = 0
                    else:
                        if len(word) == 0:
                            parsed_row += "&emsp;"
                        else:
                            parsed_row += word + " "
                            

    if comment:
        parsed_row += "</span></p>"
    else:
        parsed_row += "</p>"
    return parsed_row


written_file = open("python-code-converter/parsed_file.txt", 'w')

with open(f'{sys.argv[1]}', 'r') as f:
    for row in f:
        written_file.write(convert_row_into_html_paragraph(row.replace('\n', '')) + '\n')
        

written_file.close()