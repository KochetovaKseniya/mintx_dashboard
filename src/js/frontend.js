"use strict";
import templateName from "./template/template-name";

import header from "./template/header";
import top_notice from "./template/top-notice";
import main_tabs from "./template/main-tabs";
import finance from "./template/finance";
import verification from "./template/verification";
import popup from "./template/popup";
import accounts from "./template/accounts";
import account from "./template/account";

$(window).on("load", (e) => {
    templateName();

    header();
    top_notice();
    main_tabs();
    finance();
    verification();
    popup();
    accounts();
    account();
});
