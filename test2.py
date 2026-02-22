from playwright.sync_api import sync_playwright

def test():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Uncaught exception: {exc}"))
        
        page.goto("http://localhost:8080/profiles.html")
        page.wait_for_timeout(1000)
        
        print("clicking searchBtn...")
        page.click("#searchBtn")
        page.wait_for_timeout(500)
        
        print("box display:", page.evaluate("document.getElementById('placeBubbleContainer').style.display"))
        browser.close()

if __name__ == "__main__":
    test()
