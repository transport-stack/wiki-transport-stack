# Web Portal Requirements

## Introduction

### Purpose of the Document

The purpose of this documentation is to give an overview of the requirements for the web-portal namely Delhi Transport Stack for front-end and back-end users, outline the business requirements, and state how the requirements are going to be met i.e. the acceptance criteria.

### Objectives of the System

- To create a unified transport ecosystem covering Metro, Bus, Rapid Rail and Micromobility through establishment of secure data highways.
- To unlock and harness the transit data of citizens, paving the way for effective urban management and evolve into smart city.
- To foster innovation ecosystem by providing open API access to Transport and Ancillary Services data, enabling businesses, startups, and app developers to create new services.

---

## The Web Portal: A Gateway to the Open Transit Ecosystem

The Web Portal is the central gateway to the entire Open Transit Data (OTD) ecosystem. It serves as the primary interface for all users—from the public to developers and transit administrators—to discover, access, and interact with the rich datasets provided by the platform. Its core purpose is to make transit data accessible, usable, and actionable.

### Key Roles and Features by User Type

The portal is designed to meet the distinct needs of its diverse user base:

#### For Public, Developers, Researchers, and Businesses

- **Centralized Data Catalog:** A comprehensive catalog to discover all available datasets, including static schedules (GTFS), real-time feeds (GTFS-RT), and specialized models for bus, metro, accessibility, and shared mobility.
- **API Documentation and Access:** Provides detailed, interactive API documentation (e.g., Swagger/OpenAPI) and a streamlined process for subscribing to APIs and managing access keys.
- **Bulk Data Download:** Allows users to register and download complete datasets in various formats (e.g., CSV, JSON) for offline analysis, research, and application development.

#### For Transit Operators and Administrators

- **User and Access Management:** A secure backend portal for administrators to manage user registrations, approve data access requests, and oversee API subscriptions.
- **Data Management and Validation:** Tools and dashboards to monitor the health of data pipelines, as described in the Data Exchange model, ensuring data quality and reliability.
- **Analytics and Reporting:** Dashboards to visualize key metrics, such as passenger flow, ridership trends, and system performance, derived from the aggregated data models.

---

### Functional Requirements

#### For Front-End Users
- Browse and search available datasets and services
- Register, sign in, and manage user profile
- Subscribe to datasets/services (free and paid)
- View and manage active subscriptions
- Download datasets in supported formats (CSV, JSON, etc.)
- Access API documentation and manage API keys
- View subscription status, expiry, and renewal options
- Receive notifications and updates
- Access support and help resources

#### For Admin Users
- Manage user registrations and profiles
- Approve or reject access requests for datasets/services
- Manage organization whitelist/blacklist
- Monitor and manage all active subscriptions
- Edit payment amounts and generate payment links
- View analytics and usage reports
- Manage API access and keys
- Configure portal settings and access controls

#### Request Management
- Centralized dashboard for all incoming data/service requests
- Approve or reject requests with comments
- Track request status (submitted, approved, payment pending, payment successful, access granted, rejected)
- Notify users of request status changes
- Modify payment terms if required
- Export request logs and reports

<!-- - **Scenario 1:** On Registration Form Submit, the Organization Name check would be done by the admin to check if it is in the Blacklisted Organization list. If found to be in the blacklisted Organization list, the admin would REJECT the Registration. An email would be sent to the user to inform them of the rejected registration due to invalid Organization name.
- **Scenario 2:** On Registration Form Submit, the Organization Name check would be done by the admin to check if it is in the Blacklisted Organization list. If NOT found to be in the blacklisted Organization list, the admin would APPROVE the Registration. An email would be sent to the user to inform them of the Accepted registration.
- A toggle switch to on/off this Organization name check would be provided to the Master Admin in the Back-end portal – Request Management. -->

#### Forgot and Reset Password

- In case the password is not known, the user clicks on “Forgot password” option.
- The user enters the email address and clicks on “Forgot password” option.
- “Forgot Password” when the user clicks on this option on the “Sign In” page, the user will be redirected to next page, where the user would provide either email address or Mobile number to receive the OTP for verification.
- On providing the same, the user will have to enter the OTP and on successful OTP Validation, the user will be redirected to the Change Password page where the user will have to enter the new password and re-enter the new password again and submit to successfully change and get the new password.
- In case of Reset Password, the user would be able to change the old password to a new password from the Settings option under “My Profile” options where the user will provide old password and enter the new password twice and submit.

#### User Edits Profile

- User can choose to click on the ‘Edit Profile’ link and the user would be redirected the Edit Profile Link.
- User would be able to edit specific information, and some would be non-editable.
- User successfully edits and Saves the required Profile information.

**Note:**
- The change in mobile number would need an OTP Validation.
- We need to add a check for the OTP Validation (mobile number change) once user submits after editing the profile information.

| S.No | FIELD NAME | REGISTRATION (Mandatory/Optional Fields) | EDIT PROFILE (Editable/Non-Editable Fields) |
| :--- | :--- | :--- | :--- |
| 1 | Type of organization | Mandatory | Editable |
| 2 | Organization Name | Mandatory | Editable |
| 3 | Profile Description | optional | Editable |
| 4 | User First Name | Mandatory | Non-Editable |
| 5 | User Last Name | optional | Editable |
| 6 | User official Email Address | Mandatory | Non-Editable |
| 7 | User Phone number | Mandatory | Editable |
| 8 | User office Address | optional | Editable |
| 9 | User office Country | Mandatory | Editable |
| 10 | User office State | optional | Editable |
| 11 | Use Office Pin code | optional | Editable |
| 12 | Password | Mandatory | Editable |

#### User on My Profile->My Subscriptions

The user will be able to view the list of all the subscribed datasets post the Dataset/Service Request approvals from Admin under this specific section with the current status as well as access granted till date information.

The various status stages based on different scenario’s the user would see for either Dataset/Service would be:

- Request Submitted
- Approved
- Payment Pending
- Payment Successful
- Access Granted
- Rejected

When the user clicks on any of the subscribed dataset/service , the user is redirected to the page with status and expiry date details along with the details filled in the Dataset/Service Request Form at the time of seeking approval from the Admin.

On the My Subscriptions – Request Form Detail page, the user has 3 options:

- **Renew Subscription:** “Renew Subscription” will allow the user to change/choose the Subscription Type (drop-down list with values as Monthly/Yearly) and Submit. This would be considered as Automatically extended if Free and would be considered as a Scenario for Dataset/Service Request if Paid. This would be auto-approved. Renew Subscription option would be provided a month in advance prior to the expiry date of the subscribed dataset/service for yearly subscriptions. For monthly subscription the option would be available a week prior to the expiry date. In case of “Auto Renewal” option the same would be achieved by keeping a flag in DataBase and the same can be enabled/true based on the requirement.
- **Pay now:** “Pay Now” option allows the user to Retry for Payment incase in the first attempt the payment failed and the user is allowed to do the payment again without the need for Requesting for DataSet/Service Approval again from the admin. Once the ‘Pay Now’ button is clicked, the user is redirected to the External Payment Gateway/system to do the required payments through various payment methods.
- **Unsubscribe:** This option is provided to unsubscribe from the existing subscriptions i.e. from any specific data/service.

**Additional Requirements:**

In My subscriptions, the tags should showcase two more things:

- Status - If access is granted, then 'Access until [date]'
- The current status of the Dataset/Service would be displayed like 'Payment Successful', 'Payment Pending', 'Access Granted' etc.

A double click page needs to be created, wherein user would be able to see the below details:

- What user submitted in request form
- The current status of request
- Expiry date for the access
- Options to take actions required (e.g. make payment, apply for access renewal)
- “Renew Subscription”, “Pay Now” and “Unsubscribe”.

#### User on My Profile->My Requests

The user will be able to view the list of all the datasets/services before/prior to the Dataset/Service Request approvals from Admin under this specific section with the status as “Request Submitted”.
The user when clicks on any specific dataset/service will be taken to the view only page with the current status of the Dataset/Service displayed to the user which are pending for the dataset request/service approvals from the admin along with the Data/Service Request Form information/details.

#### User on My Profile->Settings

The user will be able to navigate to the “Settings” page. Under Settings, the user would be able to do the below:

- Change the Notifications settings to “On” or “Off”.
- Change Password (Reset password) option also would be provided to the user where the user can enter old password and the new password twice to reset the password.

---

### Back End Portal- Request Management

Request Management tab would further have “DataSets Request Management” and “Service Request Management” sub-tabs.

A new tab would be added here as “Registration Request Management” for the admin to approve of the Registration request submitted only if the Organization Name is valid and is not enlisted under Blacklisted Organization.

The main screen will have option to toggle between Registration request management approval (On /Off) option.

On the Main page of this tab – all the Registration Request pending for approval would be visible with the data table – showing ‘Organization Name’ as one column and the action buttons as “Approve / Reject” on the same page for the admin user.

**Steps for the Overall Process Flow for DataSet/Service Request from User to the Admin Portal and then back to the User:**

For Paid APIs:

1. User submits a data/service request form to get the approval from admin for a specific paid dataset/service.
2. The designated approvers (up to 3) for each dataset/service will receive a request on their account in admin portal, as well as notification via email.
3. Clicking on the link in the email, will navigate them to their account in admin portal to approve or reject the request; designated approver would be able to see all the details about the users and request form (beside the contact details).
4. Upon approval, an approval email will be sent to the user and admin, along with the status update in their respective account.
5. Admin would have an option to edit payment amount (allowing for offline negotiation) and then he clicks a button in admin portal to issue the payment link for the particular request.
6. User receives the email including the payment link along with status update in their respective account.
7. If the request is rejected, an automated rejection email will be sent to the user.

#### Different DataSet /Service Access Request Status as seen in the Back End Portal for a specific DataSet/Service

- Request Submitted
- Approved
- Payment Pending
- Payment Successful
- Access Granted
- Rejected

An Admin can take following actions:

- Accept and Reject the dataset/service access request submitted by the user from the front-end portal using DataAccess Request Form.
- Modify payment amount.
- Generate payment link #2 and #3 will only be active once the admin has approved the dataset/service request.
- Admin to put remarks if they reject the request, and if they modify the payment amount from the standard amount.
