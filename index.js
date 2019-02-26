/**
 * Created by shikuan on 2018/3/30.
 */
"use strict";

const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require("fs");
const async = require("async");
const Promise = require('Promise').default
const reptileUrl = "www.baidu.com";

const getData = function (url,i) {
    return new Promise((resolve, reject) => {
        superagent.get(url+'/'+i).end((err, res) => {
            if (err) {
                reject(err);
            }
            let $ = cheerio.load(res.text);
            fs.writeFile('baidu'+i+'.html', $('html').html())
            resolve(i);
        })
    })

}
function app(api) {
    const arr=[1,2,3,4,5]
    async.each(arr,(i)=>{
        getData(api , i).then((data) => {

        })
    })

}
app(reptileUrl)