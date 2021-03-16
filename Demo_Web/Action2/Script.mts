SystemUtil.Run "http://advantageonlineshopping.com", "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ hightlight id_;_1907160672_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "hongnguyen" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5fe1a4a3d5bc99590248e0c7205171db2ba769aff8ea2f6e9b82" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btnundefined")_;_script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategory")_;_script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=3100").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image id3100")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ELITEPAD 1000 G2 TABLET").Output CheckPoint("HP ELITEPAD 1000 G2 TABLET_2")
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ELITEPAD 1000 G2 TABLET").Check CheckPoint("HP ELITEPAD 1000 G2 TABLET") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ELITEPAD 1000 G2 TABLET")_;_script infofile_;_ZIP::ssf7.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf10.xml_;_
wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
wait 5 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn")_;_script infofile_;_ZIP::ssf11.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next btn")_;_script infofile_;_ZIP::ssf12.xml_;_
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay now btn SAFEPAY")_;_script infofile_;_ZIP::ssf13.xml_;_
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for buying with").Check CheckPoint("Thank you for buying with Advantage") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for buying with")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").CloseAllTabs @@ hightlight id_;_921674_;_script infofile_;_ZIP::ssf16.xml_;_
