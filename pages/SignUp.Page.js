import Collection from "lariat"
export class SignUp extends Collection {
  
	usernameInput = this.el('.login-form input[type="text"]').nth(0)	
	emailInput = this.el('.login-form input[type="text"]').nth(1)	
	passwordInput = this.el('.login-form input[type="password"]')
	actionBtn = this.el('button:has-text("create account")')
	
	async enterUsername(text){
		await this.usernameInput.type(text)
	}
	async enterEmail(text){
		await this.emailInput.type(text)
	}
	async enterPassword(text){
		await this.passwordInput.type(text)
	}
	async clickCreateAccount(){
		await this.actionBtn.click()
	}	
};