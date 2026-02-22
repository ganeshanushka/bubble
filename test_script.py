from playwright.sync_api import sync_playwright

def test_search():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Uncaught exception: {exc}"))
        
        page.goto("http://localhost:8080/profiles.html")
        page.fill("#locationSearch", "The Quad")
        page.click("#searchBtn")
        
        page.wait_for_timeout(1000)
        
        is_visible = page.is_visible("#placeBubbleContainer")
        print(f"Place bubble container visible: {is_visible}")
        
        browser.close()

if __name__ == "__main__":
    test_search()
