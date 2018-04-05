export const expectSelectorToContainText = async (page, selector, text) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.innerHTML
    }, selector)
    expect(selectorText).toContain(text)
}
