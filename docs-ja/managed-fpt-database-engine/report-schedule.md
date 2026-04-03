---
id: "report-schedule"
title: "Report Schedule"
description: "The **Report Schedules** function allows users to create, manage, and monitor schedules for automatically sending report"
sidebar_label: "Report Schedule"
sidebar_position: "43"
---

# Report Schedule

The **Report Schedules** function allows users to create, manage, and monitor schedules for automatically sending reports on backup activities for database clusters over selected periods. Instead of manually accessing the system to export reports, users can set up schedules for the system to automatically send periodic reports to predefined email addresses. Reports are sent as CSV files.
To create a report submission schedule, follow these steps:

### Step 1: Access the Reporting schedule management
Select **Database Platform** on the menu bar, then select **Advanced Features** to open the **Advanced Features** screen.
[![](/img/migrated/B1-c0322d1a.png)](/img/migrated/B1-c0322d1a.png)
On the **Advanced Features** screen, click **Go to Reporting** to open the Reporting screen. When the **Reporting** interface appears, select the **Report Schedules** tab to view the list of existing report schedules. If no schedules have been created, the list displays "Nothing Found."
[![](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)
Displayed information for each schedule:  
| Column Name  | Description  |  
| --- | --- |  
| Schedule name  | Name of the schedule  |  
| Report type  | Report type (e.g., Backup Report)  |  
| Data period  | Data period for each report (e.g. Daily, Weekly, Monthly)  |  
| Report frequency  | Report sending frequency (e.g., Daily, Weekly, Monthly)  |  
| Email recipients  | List of email addresses receiving the report  |  
| Created at  | Schedule creation time  |  
| Action  | Options to edit (Edit) or delete (Delete) the schedule  |  

### Step 2: Create a new report schedule
On the **Report Schedules** screen, click the **Add Schedule** button in the top-right corner to open the **Add a Report Schedule** screen.
[![](/img/migrated/create-report-schedule-scaled-523d245a.png)](/img/migrated/create-report-schedule-scaled-523d245a.png)
Enter configuration information for the schedule:
  * **Schedule Name** : Enter a name for the schedule. The name should clearly describe the schedule's purpose (maximum 25 characters, minimum 6 characters, containing only English letters, numbers, spaces, underscores (_), and hyphens (-)). Example: _Report_for_group1, Report for group 2_.
  * **Report Type** : Select the report type from the available list. Currently, only the backup service report is provided, so the list has one value that is **Backup Report** and will be selected by default. Additional values will be added when other report types are provided.
  * **Data Period** : Select the data time period to be retrieved for each report generation. Changing the value of Data Period will automatically update the values of the **Report Frequency** and **Day To Send** fields depending on the selected case (see descriptions for each field below). The available options are: 
    * **Yesterday** : Retrieves data from the day immediately preceding the current date (current date − 1). Example: If the report is generated on April 17, 2025, the report data covers April 16, 2025.
    * **Last 7 days** : Retrieves data for the seven consecutive days prior to the current date, ranging from current date − 7 to current date − 1. Example: If the report is generated on April 17, 2025, the report data covers April 10, 2025 to April 16, 2025.
    * **Last 30 days** : Retrieves data for the thirty consecutive days prior to the current date, ranging from current date − 30 to current date − 1. Example: If the report is generated on April 17, 2025, the report data covers March 18, 2025 to April 16, 2025.
    * **Last month** : Retrieves data for the entire previous calendar month, from the first day to the last day of that month. Example: If the report is generated on April 17, 2025, the report data covers March 1, 2025 to March 31, 2025.
  * **Report Frequency** : The frequency at which the schedule runs. Values include _Daily_ , _Weekly_ and _Monthly_. This field’s value automatically changes based on the selected **Data Period** :
    * If "Yesterday" is selected for **Data Period** , **Report Frequency** displays "Daily" (reports sent daily).
    * If "Last 7 days" is selected for **Data Period** , **Report Frequency** displays "Weekly" (reports sent Weekly).
    * If "Last 30 days" or "Last Month" is selected for **Data Period** , **Report Frequency** displays "monthly" (reports sent monthly).
  * **Day To Send** : Select the day on which the schedule runs. This field’s value changes based on the selected **Data Period** :
    * If "Yesterday" is selected for **Data Period** , **Day To Send** displays "Daily" (schedule runs every day) and cannot be edited
    * If "Last 7 days" is selected for **Data Period** , the options include weekdays: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" and "Sunday" (schedule runs on the selected weekday)
    * If "Last 30 days" or "Last Month" is selected for **Data Period** , the options include days 1–31 (schedule runs on the selected day of the month). If the selected day does not exist in a given month (e.g., day 31 in February), the schedule runs on the last day of that month.
  * **Time To Send** : Select the time of day when the schedule runs.
  * **Database Cluster** : Select the databases from which data will be retrieved for the report (multiple selections possible). Options include:
    * **Select All** : Select all databases in the list.
    * o Databases belonging to the user's selected VPC.
  * **Email Recipients** : Enter the list of email addresses that will receive the report. Ensure emails are entered accurately to avoid delivery issues. Use the (+) button to add an email and the (–) button to remove one
    * Each email must follow the standard email format (username + "@" + domain).
    * Duplicate emails are not allowed.

After entering all information, click Save to create the schedule. The system returns to the list screen, with the newly created schedule displayed at the top.
At the configured run time, the schedule executes, retrieves data for the specified period and selected database clusters, generates a CSV file, and sends it to the registered email addresses.
If needed, you can perform the following actions on the created schedule:
  * _View schedule details:_ On the **Report Schedules** screen, click the name of a schedule to view its configuration details and activity log.
  * _Edit a schedule_ : On the **Report Schedules** screen, select **Edit** in the **Action** column corresponding to the schedule to open the schedule configuration edit screen. Users can update information in the same way as when creating a new schedule. After entering all information fully, click the **Edit** button to save the changes. The system will return to the list screen with the updated information for the edited schedule.
  * _Delete a schedule_ : On the **Report Schedules** screen, select **Delete** in the **Action** column corresponding to the schedule to be deleted to display available actions. The system will display a confirmation dialog. Enter the confirm information and click **Confirm** to permanently delete the schedule. After deleting successfully, the system will stop sending reports to the configured email addresses.
