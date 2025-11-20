export class DashPage {
    constructor(page) { 
        this.page = page;
        this.dashHeader = page.locator('h6.oxd-text.oxd-text--h6');
    }

    async checkDashPage(){
        await this.dashHeader.waitFor();
    }

}