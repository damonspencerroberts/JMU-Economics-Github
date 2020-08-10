import React from "react";
import headTitlejs from "../../js-files/title-paragraph/head-tit-para";
import TitlePara from "../title-paragraph/tit-para";

const headPageTitle = () => <div className = "head-top-paragraph">
    <TitlePara 
    titleDiv = {headTitlejs[0].titleDiv} 
    title = {headTitlejs[0].title} 
    contentDiv = {headTitlejs[0].contentDiv} 
    content = {headTitlejs[0].content} />
    <hr/>
    </div>

export default headPageTitle;
