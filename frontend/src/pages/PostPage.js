import React from "react";

const html = '<!DOCTYPE html>\n' +
  '<html lang="en">\n' +
  '<head>\n' +
  '    <meta charset="UTF-8">\n' +
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
  '    <title>Document</title>\n' +
  '    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">\n' +
  '    <style>\n' +
  '\n' +
  '    .masonry { \n' +
  '        padding: 40px;\n' +
  '        column-count: 4;\n' +
  '        column-gap: 1em;\n' +
  '    }\n' +
  '\n' +
  '    .card {\n' +
  '        display: inline-table;\n' +
  '        font-family: \'Roboto\', sans-serif;\n' +
  '        text-align: center;\n' +
  '        background: linear-gradient(#fe7379, #f5529f);\n' +
  '        min-height: 300px;\n' +
  '        width: 300px;\n' +
  '        border-radius: 10px;\n' +
  '        margin-left: 50px;\n' +
  '        margin-top: 30px;\n' +
  '    }\n' +
  '\n' +
  '    .card-avatar {\n' +
  '        display: inline-block;\n' +
  '        margin-top: 30px;\n' +
  '        background-image: url(\'https://i.imgur.com/eCBkzSn.jpg\');\n' +
  '        background-size: cover;\n' +
  '        background-position: center;\n' +
  '        margin-bottom: 20px;\n' +
  '        height: 140px;\n' +
  '        width: 140px;\n' +
  '        border: 8px solid #fff;\n' +
  '        border-radius: 25px;\n' +
  '        box-shadow: 10px 10px 5px #aaaaaa;\n' +
  '        box-shadow: 0px 20px 50px 3px #00000033;\n' +
  '    }\n' +
  '\n' +
  '    .card-text {\n' +
  '        text-align: justify;\n' +
  '        color: rgba(255, 255, 255, 0.96);\n' +
  '        font-size: 16px;\n' +
  '        padding-left: 25px;\n' +
  '        padding-right: 25px;\n' +
  '    }\n' +
  '\n' +
  '    .card-btn {\n' +
  '        padding: 10px;\n' +
  '        display: inline-block;\n' +
  '        border: 4px solid #fff;\n' +
  '        border-radius: 25px;\n' +
  '        width: 130px;\n' +
  '        font-size: 14px;\n' +
  '        color: #fff;\n' +
  '        font-weight: 900;\n' +
  '        margin-bottom: 30px;\n' +
  '    }\n' +
  '    </style>\n' +
  '</head>\n' +
  '<body>\n' +
  '    <div class="masonry">\n' +
  '    <div class="card" style="background: linear-gradient(#1de2db, #5b7de8)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/035PVSG.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#fcaa44, #fe428e)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/wv0RjG6.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#fcde8b, #ff716a)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/CYXMhW4.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt \n' +
  '        </p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#ff4493, #e63784)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/JtZSmv9.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#1fc2d6, #553181)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/VfL149L.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt \n' +
  '            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n' +
  '            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n' +
  '        </p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +  
  '    <div class="card" >\n' +
  '        <div class="card-avatar"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt \n' +
  '            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n' +
  '            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \n' +
  '        </p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#1de2db, #5b7de8)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/035PVSG.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '    <div class="card" style="background: linear-gradient(#ff839d, #f50b9a)">\n' +
  '        <div class="card-avatar" style="background-image: url(\'https://i.imgur.com/Asb7a1h.jpg\');"></div>\n' +
  '        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>\n' +
  '        <a href="#"><div class="card-btn">READ MORE</div></a>\n' +
  '    </div>\n' +
  '\n' +
  '</div>\n' +
  '</body>\n' +
  '</html>'

export default function PostPage() {
  return(
      <div  dangerouslySetInnerHTML={{__html: html}} />

  )
}