# How to use this file?
# Create list of all folders in a file named folders.txt
# This file should be in the same folder where you want to create all folders with jsx and css files in it
# Run this script in the same folder (WSL / Unix OS only)
# Magic is done
# All listed Folders are created in the same directory and each folder has a jsx and css files in it
# The fun part is that all the files inside these folder are properly names using folder's name

# Upd: This one also create an index.js file inside the components folder,
# which helps in efficient importing of many components at once.
# It also increases scalability.

#!/bin/bash

rm index.js || touch index.js
> index.js
files=""
for i in $(cat folders.txt)
do
  file=`echo "$i" | sed 's/.*/\u&/'`
  mkdir $i && touch $i/$file.jsx && touch $i/$i.css

  echo "import React from 'react';\n\nconst ${file} = () => {\n\treturn (\n\t\t<div>${file}</div>\n\t);\n};\n\nexport default ${file};" > ${i}/${file}.jsx

  echo "import ${file} from './${i}/${file}';" >> index.js

  if [ ! -z "$files" ]
  then
    files=${files}", "${file};
  else
    files=$file;
  fi
done

echo "\nexport { ${files} };" >> index.js
