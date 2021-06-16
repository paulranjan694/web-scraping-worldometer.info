const request = require("request");
const cheerio = require("cheerio");
const chalk  = require("chalk");

request("https://www.worldometers.info/coronavirus/", cb);

function cb (error, response, html){
    if(error){
        console.log("error : "+error);
    }else{
        handlehtml(html);
    }
}

function handlehtml(html){
    let selectTool = cheerio.load(html);
    let contentArr = selectTool("#maincounter-wrap span");
    // contentArr.map(data=>console.log(data));
    let total = selectTool(contentArr[0]).text();
    let deaths = selectTool(contentArr[1]).text();
    let recovered = selectTool(contentArr[2]).text();

    console.log(chalk.gray("Total cases : "+ total));
    console.log(chalk.red("Total deaths : "+ deaths));
    console.log(chalk.green("Total recovered : "+ recovered));
}