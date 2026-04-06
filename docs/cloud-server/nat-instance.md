---
id: "nat-instance"
title: "Nat Instance"
sidebar_label: "NAT Instance"
sidebar_position: 54
---

NAT Instance


This feature enables instances in an isolated network to access external Internet systems, such as installing software or connecting back to an on-premise environment.

Set up a NAT Instance as follows:

**Step 1**: Create a NAT Instance from the image provided by FCI.

![file](images/nat-instance/img-001.png)

![file](images/nat-instance/img-002.png)

**Note: For the subnet field, select a subnet that has Internet access.**

![file](images/nat-instance/img-003.png)

**Step 2**: Attach a Floating IP to the NAT Instance. If the instance already had a Floating IP attached during the initialization step, you do not need to perform this action.

![file](images/nat-instance/img-004.png)

![file](images/nat-instance/img-005.png)

![file](images/nat-instance/img-006.png)

**Step 3**: Attach a security group to the NAT Instance. Open the necessary rules for instances in the isolated network to access the Internet (you may also open the ICMP port to test ping connectivity). If the instance was already attached to a security group during the initialization step, you do not need to perform this action.

![file](images/nat-instance/img-007.png)

![file](images/nat-instance/img-008.png)

**Step 4**: Add a Network Interface Card (NIC) belonging to the same subnet as the isolated subnet of the instance that needs Internet access.

![file](images/nat-instance/img-009.png)

![file](images/nat-instance/img-010.png)

![file](images/nat-instance/img-011.png)

**Step 5**: Allow address pair 0.0.0.0/0 for the NIC belonging to the isolated network.

![file](images/nat-instance/img-012.png)

![file](images/nat-instance/img-013.png)

**Step 6**: Access the instance in the isolated network and change the gateway to the IP of the NAT Instance's NIC. In this example, FCI uses a Windows OS instance.

![file](images/nat-instance/img-014.png)

![file](images/nat-instance/img-015.png)

![file](images/nat-instance/img-016.png)

")
