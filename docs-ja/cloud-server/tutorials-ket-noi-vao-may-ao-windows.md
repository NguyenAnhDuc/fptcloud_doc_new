---
id: "tutorials-ket-noi-vao-may-ao-windows"
title: "Windows仮想マシンへの接続"
description: "Web ConsoleまたはRemote Desktop Connection（RDC）を使ってWindows仮想マシンに接続する方法。"
sidebar_label: "Windows仮想マシンへの接続"
sidebar_position: 12
---

# Windows仮想マシンへの接続

Windows仮想マシンが正常に作成されたら、**Web Console**（デフォルト）または **Remote Desktop Connection**（仮想マシンにFloating IPがある場合）でアクセスできます。

## Web Consoleによる接続

Web ConsoleはFPT Cloud上のすべてのWindows仮想マシンの操作をサポートしており、Public IPがない仮想マシンも利用できます。

1. **Instance Management** で接続する仮想マシンを選択し、**Actions** → **Console** をクリックします。

   [![ConsoleオプションのあるActionsメニュー](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

ブラウザが新しいウィンドウを開き、サーバー画面が表示されます。ここから完全に操作できます。

[![Web Console Windows画面](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)

## Remote Desktop Connectionによる接続

RDCを使用するには、仮想マシンに **Floating IP** があり、Security Groupで **ポート3389** がRDP接続用に開放されている必要があります。

1. Windows仮想マシンを作成し、**Floating IP** を割り当てて起動します。

   [![Floating IPのあるWindows仮想マシン](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)

2. RDPポート3389を開放した **Security Group** を仮想マシンに割り当てます。

   [![RDPポート3389のSecurity Group](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)

3. Floating IPとポート3389でRemote Desktop Connectionを使って接続します。

   [![Remote Desktop Connectionで接続](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)

:::tip
接続できない場合は以下を確認してください：仮想マシンが起動しているか、Floating IPが正しいか、Security GroupでポートA3389が開放されているか。
:::

## 次のステップ

- [Linux仮想マシンへの接続](./tutorials-ket-noi-vao-may-ao-linux.md)
