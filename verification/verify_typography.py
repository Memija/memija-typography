from playwright.sync_api import Page, expect, sync_playwright

def verify_typography(page: Page):
    page.goto("http://localhost:3000")

    # Check if header is present
    expect(page.get_by_alt_text("Brand logo")).to_be_visible()

    # Interact with the Input component
    textarea = page.locator("textarea")
    expect(textarea).to_be_visible()
    textarea.fill("Hello World")

    # Check if the output updates
    output = page.locator(".general-output.view-output")
    expect(output).to_contain_text("Hello World")

    # Change Color (Main color input)
    color_input = page.get_by_test_id("color-input")

    # Fill and wait
    color_input.fill("#ff0000")

    # Verify CSS output contains the color
    css_output = page.locator(".general-output.css-output-display")
    expect(css_output).to_contain_text("color: #ff0000;")

    # Take screenshot
    page.screenshot(path="verification/typography_verified.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_typography(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()
