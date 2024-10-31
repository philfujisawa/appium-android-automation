import userData from '../data/userData.json'
import { expect, $, browser } from '@wdio/globals'
import MenuScreen from '../screenObjects/menu.screen.js'
import LoginScreen from '../screenObjects/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password)
        await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
        await browser.pause(2000)
    })

    it('should login with valid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await browser.pause(2000)
    })
})