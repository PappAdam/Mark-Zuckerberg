import sys

c_orange = "#EE4F16"
c_black = "#262523"
c_grey = "#4d4a46"
c_dark_grey = "#353330"
c_light_grey = "#85807a"
c_blue = "#00798C"
c_white = "#F7F4ED"

written_file = open("python-code-converter/parsed_txt.txt", 'w')

with open(f'{sys.argv[1]}', 'r') as f:
    for row in f:
        row = row.replace("\n", "");
        if len(row) == 0:
            written_file.write("<br>")
        else:
            written_file.write(f"<p>{row}</p>")
        

written_file.close()