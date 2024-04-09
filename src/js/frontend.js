"use strict";
import templateName from "./template/template-name";

import header from "./template/header";
import top_notice from "./template/top-notice";
import main_tabs from "./template/main-tabs";
import finance from "./template/finance";
import verififcation from "./template/verififcation";

$(window).on("load", (e) => {
    templateName();

    header();
    top_notice();
    main_tabs();
    finance();
    verififcation();
});
