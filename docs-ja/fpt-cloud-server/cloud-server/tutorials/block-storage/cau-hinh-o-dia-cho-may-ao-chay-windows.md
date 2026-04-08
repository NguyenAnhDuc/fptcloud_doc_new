---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Cau Hinh O Dia Cho May Ao Chay Windows"
sidebar_label: "Windows仮想マシンのストレージディスク設定"
sidebar_position: 4
---

Windows仮想マシンのストレージディスク設定


**FPT Portal**で仮想マシンに**Storage Disk**を接続した後、Linuxマシンは新しいディスクを自動的に検出します。Windowsマシンの場合は、ユーザーが仮想マシンにリモート接続してディスクの設定を完了する必要があります。

**ステップ1:** 仮想マシンにアクセスします。

**ステップ2:** 以下のいずれかの方法で**Windows**の**Disk Management**を開きます：

  * **Windows + R**キーを押し、**diskmgmt.msc**と入力して**Enter**を押します。

  * **スタート**ボタンをクリックし、検索ボックスに**diskmgmt.msc**と入力して**Disk Management**を選択します。


![Userguide FPT Cloud Server 2022 62](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-001.png)

**ステップ3:** **Disk Management**には仮想マシン上のすべてのハードドライブが表示されます。新たに接続されたディスクは**Offline**ステータスで表示されます。

![Userguide FPT Cloud Server 2022 63](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-002.png)

**ステップ4:** ディスクアイコンを右クリックし、**Disk**メニューから**Online**を選択します。

![Userguide FPT Cloud Server 2022 64](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-003.png)

**ステップ5:** ディスクが**Online**および**Not Initialized**ステータスに変わります。ディスクアイコンを右クリックし、**Initialize Disk**を選択します。

![Userguide FPT Cloud Server 2022 65](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-004.png)

**ステップ6**: 適切な**パーティションスタイル**を選択して**OK**をクリックします。

![Userguide FPT Cloud Server 2022 66](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-005.png)

**ステップ7:** ディスクの未割り当て領域を右クリックし、**New Simple Volume**を選択します。

![Userguide FPT Cloud Server 2022 67](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-006.png)

**ステップ8:** 表示された**New Simple Volume Wizard**で**Next**をクリックします。

![Userguide FPT Cloud Server 2022 68](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-007.png)

**ステップ9:** **Simple volume size in MB**フィールドに希望のディスクサイズを入力し、**Next**をクリックします。

![Userguide FPT Cloud Server 2022 69](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-008.png)

**ステップ10:** **Assign the following drive letter**セクションでドライブ文字を選択し、**Next**をクリックします。

![Userguide FPT Cloud Server 2022 70](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-009.png)

**ステップ11:** **Format this volume with the following settings**を選択し、以下の情報を入力します：

  * **File System:** 最速のフォーマット処理のためNTFS形式を選択します。必要に応じて他の形式を選択することもできます。
  * **Allocation unit size:** Defaultを選択します。
  * **Volume label:** ディスクの名前を入力します。


**Next**をクリックして次のステップに進みます。

![Userguide FPT Cloud Server 2022 71](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-010.png)

**ステップ12:** **Finish**をクリックして完了します。

![Userguide FPT Cloud Server 2022 72](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-011.png)

接続されたストレージから、Windows仮想マシンに新しいディスクが正常に設定されました。

![Userguide FPT Cloud Server 2022 73](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-012.png)

通常の方法でステップ1からステップ6を完了できない場合は、代わりに以下のCMDコマンドを使用できます：
スタート > cmd（管理者として実行）

---
Diskpart > list disk > select disk > online disk > attributes disk clear readonly > Exit

その後、上記の手順に従ってステップ7から続けます。
