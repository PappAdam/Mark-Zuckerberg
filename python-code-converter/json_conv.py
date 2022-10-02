import sys

c_orange = "#EE4F16"
c_black = "#262523"
c_grey = "#4d4a46"
c_dark_grey = "#353330"
c_light_grey = "#85807a"
c_blue = "#00798C"
c_white = "#F7F4ED"

def convert_row_into_html_paragraph(row: str) -> str:   
    parsed_row = "<p>"

    temp = ""
    row = row.split(':');
    if " " in row[0]:
        for _ in range(len(row[0].split(" "))-1):
            temp += "&emsp;"
    row[0].strip()
    parsed_row += temp

    if "}" in row or "{" in row:
        parsed_row += f"<span style=\\'color: {c_light_grey}\\'>{row[0]}</span>"
        
    else:
        if "}" in row[0]:
            for i in range(len(row[0])):
                if row[0][i] == "}":
                    parsed_row += f"<span style=\\'color: {c_light_grey}\\'>{row[0][i]}</span>{row[0][i+1:len(row[0])-1]}"

        else:
            parsed_row += f"<span style=\\'color: {c_blue}\\'>{row[0]}:</span>"

        if len(row) > 1:
            if "{" in row[1]:
                for i in range(len(row[1])):
                    if row[1][i] == "{":
                        print(i, row[1][i]);
                        parsed_row += f"{row[1][0:i]}<span style=\\'color: {c_light_grey}\\'>{row[1][i]}</span>{parsed_row[1][i+1:len(row[1])-1]}"
            else:
                parsed_row += f"{row[1]}"

    parsed_row += "</p>"
    return parsed_row


written_file = open("python-code-converter/parsed_json.txt", 'w')

with open(f'{sys.argv[1]}', 'r') as f:
    for row in f:
        written_file.write(convert_row_into_html_paragraph(row.replace("\n", "")))
        

written_file.close()