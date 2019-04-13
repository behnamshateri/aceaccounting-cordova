1. Signup/Signin/Bank Update (Websocket with dialog)

B) User should be able to login/signup to an organization, 
and accept invitation to take role a in a company and manage bank account.
this function is similar to xero where there is a table for invites and accepting

- SignUp will include sending SMS (a rewrite of PHP package to send Nexmo/Kannel or Kavenegar SMS)

recrate forms for the login to bank account:

Bunq oAuth API (oauth api): https://doc.bunq.com/
ABNAmro Login Page (single stage with account / pass and otp device): https://www.abnamro.nl/portalserver/my-abnamro/my-overview/overview/index.html
Rabbobank (Double stage with photo QR code): https://bankieren.rabobank.nl/klantenam=rabo_internetbankieren 
	Testing Account Number: 307957888
	Testing Card Number		1123
	(After entering the Account and Card number, bank website will display a QR barcode, this needs to be sent to user)
	
ING (Single Step user/pass, Double stage is not known to us yet): https://mijn.ing.nl/login
CIMB (Single OTP device and Double Mobile SMS): https://www.cimb.bizchannel.com.my/corp/common2/login.do?action=loginRequest 
	Testing Org ID M0045750
	Testing User   Seyed
	(At stage two do not provide any password and login, otherwise the user will be blocked.)
	After successfully providing a password, the bank will SMS the OTP in case the account is Double Stage login 
	and/or if the account is Single Stage, the user must provide OTP in advance, this means we must show to user a Radio option to choose
	SMS or Device OTP.
Maybank (Single only): https://www.maybank2e.com/m2e/portal/portal.view

Two Stage Login and Single Stage:
Single: Logins where user can provide user/pass with option of OTP to login
Two Stage: User must first provide information such as user/pass/account no and pass number then bank website will show photo or send SMS otp to user phone
then user must supply those to get the login completed.

this is one of the reason we use websocket so we can have two way communication with client.


########################################################################################################
2. Price Calculator (example here: http://api03nl.aceaccounting.nl/package/basic_package

Price calculator will follow a json reply from server based on price for each item:
the table is generated from table : https://docs.google.com/spreadsheets/d/1A22ZzSkdDNO9RoOx1iI5-31q4PZa5OLvqINhdeTVHHk/edit#gid=1027351096
and some items have fixed quantity and some are flexible.

the purpose of of the price calculator is to make sure user pays only for the items they are using in the company.


Camera Photo

Would take a photo and submit the photo to back-end in binary or base64 format.
the will be a list of photos with small and medium thumbnails so user would be able to track the photos he or she takes.


########################################################################################################
3. CRUD: Contact / Inventory / Chart of Accounts / Sales Invoice -> Create mock-up of www.xero.com


User should be able to use wizard and calculate the information the cost of using Ace App for him, the demo is available.
upon completting this the user must pay for the first month and the organizations must be approved by accountant, once approved
the link to Xero Auth must continue and Bank Account Setup must complete (It is linked to Mile Stone
- Contacts
- Inventory
- Description, qty, discount
- Chart of Account
- Tax Rate
- Add Payment Page
- Print PDF / Email Invoice

########################################################################################################
4. CRUD : Bill Expenses -> create mock-up of www.xero.com

Create the similar options as it is available in Xero.com
- Contacts
- Inventory
- Chart of Account
- Tax Rate
- Add Payment Page

########################################################################################################
5. Human Resources (as per sample in ionic creator)

CRUD
Information about company staff 
Firstname
Lastname
Salary
Join Date
Phone
Email
Address
TaxID
DateOfBirth
Position

API Document Link https://www.nmbrs.com/developer

########################################################################################################
6. Batch pay bills
A) User would select a list of bills(expenses) and check them to pay all at once:
according to Xero API:
https://developer.xero.com/documentation/api/batch-payments

B) Batch payment is inserted and Bunq API is called to insert/approve and process payment.

At this stage only Bunq api would support online batch payment.
for other banks a SEPA XML format must be generated where user can download the file and upload
to banks like ING, AbnAmro or Rabobank. 

########################################################################################################
7. Leave request (Request or Widthraw / Approve / and listing) push notification and managements

StaffID: 
Type: Medical / Vacation
Salary: Paid / Unpaid
Start Date / Time
End Date / Time

A request is submitted by user and then it is pending approval or denial by management.
there are then two tables in database:
- LeaveRequest (status : approved, denied, withrawn)
- LeaveApproved (status: taken/cancelled)

There will be general push notification at this point where the content of Push must have a Message, Flag(seen/unseen) for each user
the notification is also linked to an object/item where front-end must open.
Therefore all items including invoices/bills/leave request/ bank statement update

Example of push:

	server-to-client
	{
		"PUSH_GUID":"52208ff9-528a-4985-a9ad-b2b1d4210e38"
		"MESSAGE":"Your leave request was approved by Mr. Manager Name"
		"OBJECT":"LEAVE_REQUEST"
		"GUID":"6d42f03b-181f-43e3-93fb-2025c012de92"
	}

	client-to-server
	{
		"PUSH_GUID":"52208ff9-528a-4985-a9ad-b2b1d4210e38"
		"STATUS":"SEEN"
	}
