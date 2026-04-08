---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Cau Hinh O Dia Cho May Ao Chay Windows"
sidebar_label: "Configure Storage Disk for a Windows Virtual Machine"
sidebar_position: 4
---

Configure Storage Disk for a Windows Virtual Machine


After attaching a **Storage Disk** to a virtual machine on the **FPT Portal**, Linux machines will automatically detect the new disk. For Windows machines, users need to remote into the virtual machine to complete the disk configuration.

**Step 1:** Access the virtual machine.

**Step 2:** Open **Disk Management** on **Windows** using one of the following methods:

  * Press the **Windows + R** key combination, type **diskmgmt.msc**, and press **Enter**.

  * Click the **Start** button, type **diskmgmt.msc** in the search box, and select **Disk Management**.


![Userguide FPT Cloud Server 2022 62](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-001.png)

**Step 3:** **Disk Management** will display all hard drives on the virtual machine, including the newly attached disk with **Offline** status.

![Userguide FPT Cloud Server 2022 63](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-002.png)

**Step 4:** Select **Online** from the **Disk** menu by right-clicking the disk icon.

![Userguide FPT Cloud Server 2022 64](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-003.png)

**Step 5:** The disk will switch to **Online** and **Not Initialized** status. Right-click the disk icon and select **Initialize Disk**.

![Userguide FPT Cloud Server 2022 65](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-004.png)

**Step 6**: Select the appropriate **Partition style** and click **OK**.

![Userguide FPT Cloud Server 2022 66](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-005.png)

**Step 7:** Right-click on the unallocated space of the disk and select **New Simple Volume**.

![Userguide FPT Cloud Server 2022 67](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-006.png)

**Step 8:** Click **Next** in the **New Simple Volume Wizard** that appears.

![Userguide FPT Cloud Server 2022 68](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-007.png)

**Step 9:** Enter the desired disk size in the **Simple volume size in MB** field and click **Next**.

![Userguide FPT Cloud Server 2022 69](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-008.png)

**Step 10:** Select a drive letter in the **Assign the following drive letter** section and click **Next**.

![Userguide FPT Cloud Server 2022 70](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-009.png)

**Step 11:** Select **Format this volume with the following settings** and fill in the following information:

  * **File System:** Select NTFS format for the fastest formatting process. You can also select another type if preferred.
  * **Allocation unit size:** Select Default.
  * **Volume label:** Enter a name for the disk.


Click **Next** to proceed to the next step.

![Userguide FPT Cloud Server 2022 71](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-010.png)

**Step 12:** Click **Finish** to complete.

![Userguide FPT Cloud Server 2022 72](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-011.png)

The new disk has been successfully configured for the Windows virtual machine from the attached storage.

![Userguide FPT Cloud Server 2022 73](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-012.png)

If you cannot complete Steps 1 through 6 through the standard GUI, you can use the following CMD commands as an alternative:
Go to Start > cmd (Run as administrator)

---
Diskpart > list disk > select disk > online disk > attributes disk clear readonly > Exit

Then continue from Step 7 following the instructions above.
