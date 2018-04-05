import puppeteer from 'puppeteer'

import { goTo, expectSelectorToContainText } from './utils'

const APP_URL = 'http://localhost:3000'
const TIMEOUT = 10000

let page
let browser

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
    })
    page = await browser.newPage()
})

afterAll(() => {
    browser.close()
})

describe('renders home', async () => {
    test('renders header', async () => {
        await page.goto(APP_URL, { waitUntil: 'networkidle0' })
        await page.waitFor('.header-title')
        await expectSelectorToContainText(page, '.header-title', 'Color Game')
    }, TIMEOUT)

    test('renders play button', async () => {
        await page.waitFor('.button-play')
        await expectSelectorToContainText(page, '.button-play', 'Play')
    }, TIMEOUT)

    test('renders robot mode button', async () => {
        await page.waitFor('.button-robot-mode')
        await expectSelectorToContainText(page, '.button-robot-mode', 'Robot Mode')
    }, TIMEOUT)
})

describe('human plays', async () => {
    test('shows score after playing', async () => {
        await page.click('.button-play')
        await page.waitFor('.color-button')
        for (let step = 0; step < 10; step++) {
            await page.waitFor(100)
            await page.click('.color-button')
        }
        await page.waitFor('.score')
        await expectSelectorToContainText(page, '.score', '/10')
    }, TIMEOUT)
})

describe('score screen', async () => {
    test('play again button works', async () => {
        await page.click('.button')
        await page.waitFor('.start')
        await expectSelectorToContainText(page, '.start', 'Play')
    }, TIMEOUT)
})

describe('robot plays', async () => {
    test('shows 10/10 score after playing', async () => {
        await page.click('.button-robot-mode')
        await page.waitFor('.score')
        await expectSelectorToContainText(page, '.score', '10/10')
    }, TIMEOUT)
})
