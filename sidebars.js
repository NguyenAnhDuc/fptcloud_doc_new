// EN
module.exports = {
  tutorialSidebar:  [
    "intro",
    {
      type:  "category",
      label:  "FPT Cloud Server",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Tagging",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "tagging/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "tagging/create-tag-new",
                  label:  "Initializing Tags"
                },
                {
                  type:  "doc",
                  id:  "tagging/edit-tag",
                  label:  "Edit tags"
                },
                {
                  type:  "doc",
                  id:  "tagging/delete-tag",
                  label:  "Delete a tag"
                }
              ]
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage tag to Resource",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "tagging/resource-1",
                      label:  "Manage tags for resources"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-instance",
                      label:  "Manage tags for Instance"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-storage-disk",
                      label:  "Manage tags for Storage Disk"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-snapshot",
                      label:  "Manage tags for Snapshot"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-custom-image",
                      label:  "Manage tags for Custom Image"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-floating-ip",
                      label:  "Manage tags for Floating IP"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-subnet",
                      label:  "Manage tags for Subnet"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-security-group",
                      label:  "Manage tags for Security Group"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tagg-lb",
                      label:  "Manage tags for Load Balancer"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "tagging/tagging-billing",
                  label:  "Tagging billing"
                },
                {
                  type:  "doc",
                  id:  "tagging/tagging",
                  label:  "Tagging overview"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "SSO - Single sign-on",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "sso-single-sign-on/overview",
              label:  "Overview"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/config-sso",
                  label:  "Configure SSO"
                },
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/use-sso",
                  label:  "Using SSO"
                },
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/sso-single-sign-on",
                  label:  "SSO"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Policy Management",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "policy-management/overview-policy",
              label:  "Introduction"
            },
            {
              type:  "doc",
              id:  "policy-management/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-overview-policy",
                  label:  "Quick start: Policy Management"
                },
                {
                  type:  "doc",
                  id:  "policy-management/apply-policy",
                  label:  "Apply policy"
                }
              ]
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-policy",
                  label:  "Create a policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/edit-policy",
                  label:  "Edit a policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/delete-policy",
                  label:  "Delete a policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/disable-policy",
                  label:  "Disable a policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/enable-policy",
                  label:  "Enable a policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/policy-management",
                  label:  "Policy Management"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud Portal – Pay As You Go",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Registration & Login",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-ky",
                  label:  "Register an Account"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-nhap",
                  label:  "Log In"
                }
              ]
            },
            {
              type:  "category",
              label:  "Personal/Organization Registration",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/ choose-the-form-of-PAYG-and-verify-the-phon- number",
                  label:  "Select PAYG and Verify Phone Number"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/create-organization",
                  label:  "Create an Organization"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/home-page-portal",
                  label:  "Portal Home Page"
                }
              ]
            },
            {
              type:  "category",
              label:  "Top Up Account",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/recharge-via-gift-code",
                  label:  "Top Up via Gift Code"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/deposit-money-via-VNPay",
                  label:  "Top Up via VNPay"
                }
              ]
            },
            {
              type:  "category",
              label:  "Purchase Virtual Machine",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-virtual-machines",
                  label:  "Purchase a Virtual Machine"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-virtual-machine-configuration",
                  label:  "Change Virtual Machine Configuration"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-Public-IP",
              label:  "Purchase a Public IP"
            },
            {
              type:  "category",
              label:  "Purchase Storage",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-storage-disk",
                  label:  "Purchase a Storage Disk"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-removable-drive-capacity",
                  label:  "Change Storage Disk Capacity"
                }
              ]
            },
            {
              type:  "category",
              label:  "View Service Billing",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-billing-by-monthly-reconciliation",
                  label:  "View Monthly Billing"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-performed-transactions",
                  label:  "View Transaction History"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go",
                  label:  "FPT Cloud Portal – Pay As You Go"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud Desktop",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-cloud-desktop/initial-setup",
              label:  "Prerequisites"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Login with SSO (Azure)",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-tai-khoan-SSO",
                      label:  "Log in with SSO account"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/SSO-qua-FCDClient-cu",
                      label:  "SSO via legacy FCDClient"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Login with Account/Password",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-account-password",
                      label:  "Log in with Account/Password"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-moi",
                      label:  "Account/Password via new FCDClient"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-cu",
                      label:  "Account/Password via legacy FCDClient"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-desktop/faq",
                  label:  "Frequently asked questions (FAQs)"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-desktop/fpt-cloud-desktop",
                  label:  "What is FPT Cloud Desktop?"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Autoscale",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Manage Profile",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-profile",
                  label:  "Manage Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-profile",
                  label:  "Create Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/doi-ten-profile",
                  label:  "Rename Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-profile",
                  label:  "Delete Profile"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Group",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-group",
                  label:  "Manage Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-group",
                  label:  "Create Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/giam-sat-group",
                  label:  "Monitor Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/thay-doi-profile-cho-group",
                  label:  "Change Profile for Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-thu-cong",
                  label:  "Manual Scale"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-tu-dong-theo-lich-trinh",
                  label:  "Scheduled Automatic Scale"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-group",
                  label:  "Delete Group"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Policy",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-policy",
                  label:  "Manage Policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-policy",
                  label:  "Create Policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-policy",
                  label:  "Delete Policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/fpt-autoscale",
                  label:  "FPT Autoscale"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Cloud Server",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "cloud-server/Initial-Setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Create a Virtual Machine",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quick-starts-tao-mot-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-vm-iso"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/clone-instance"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-tatbat-may-ao"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-khoi-dong-lai-may-ao"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/lock-unlock-instance-deletion"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-xoa-may-ao"
                }
              ]
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Virtual Machines",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-mot-may-ao-moi"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-windows"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-linux"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/attach-a-network-card-to-the-virtual-machine"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/remove-the-network-card-from-the-virtual-machine"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-backup-may-chu-voi-snapshot"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage GPU with Portal Console",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/GPU"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-general"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-specific"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage GPU Server with HPC Portal",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-gpu-voi-hpc-portal"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-quick-start"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-change-package"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-fixed-rental"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-snapshot-backup"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-hardware-fixation"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-rest-machine"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-schedule-shutdown"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-clone-image"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-level-2-password"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-delete-image"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Block Storage",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/block-storage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tao-storage-disk"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gan-storage-disk-vao-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/cau-hinh-o-dia-cho-may-ao-chay-windows"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/go-storage-disk-khoi-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-storage-disk"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-storage-disk"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/profile-ssh-key"
                },
                {
                  type:  "category",
                  label:  "Token",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "user-token/user-token"
                    },
                    {
                      type:  "doc",
                      id:  "user-token/overview"
                    },
                    {
                      type:  "doc",
                      id:  "user-token/create-token"
                    },
                    {
                      type:  "doc",
                      id:  "user-token/revoke-token"
                    },
                    {
                      type:  "doc",
                      id:  "user-token/fqas"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Custom Images",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/custom-images-overview"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tai-len-custom-image"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-custom-image"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Instance Template",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-instance-template"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-template-tu-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-template-duoc-tao-tu-may-ao"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tao-instance-tu-template"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-xoa-template"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "NAT Instance",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "nat_instance/nat_instance"
                    },
                    {
                      type:  "doc",
                      id:  "nat_instance/overview-nat-instance"
                    },
                    {
                      type:  "doc",
                      id:  "nat_instance/Initial-Setup"
                    },
                    {
                      type:  "doc",
                      id:  "nat_instance/use-nat-instance"
                    },
                    {
                      type:  "doc",
                      id:  "nat_instance/setting-nat-instance"
                    },
                    {
                      type:  "doc",
                      id:  "nat_instance/question"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage NIC",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "nic/nic"
                    },
                    {
                      type:  "doc",
                      id:  "nic/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "nic/create-card-NIC- Primary"
                    },
                    {
                      type:  "doc",
                      id:  "nic/disable-NIC-card"
                    },
                    {
                      type:  "doc",
                      id:  "nic/enable-NIC-card"
                    },
                    {
                      type:  "doc",
                      id:  "nic/add-card-NIC- new"
                    },
                    {
                      type:  "doc",
                      id:  "nic/convert-card"
                    },
                    {
                      type:  "doc",
                      id:  "nic/edit-ip-address"
                    },
                    {
                      type:  "doc",
                      id:  "nic/change-address-MAC"
                    },
                    {
                      type:  "doc",
                      id:  "nic/delete-card-NIC"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Networking",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/network-all"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/networking-overview"
                    },
                    {
                      type:  "category",
                      label:  "Gateway",
                      collapsed:  true,
                      items:  [
                        {
                          type:  "doc",
                          id:  "gateway/gateway"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/huong-dan"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/quan-ly-danh-sach-gateway"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/quan-ly-route-1-gateway"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/quan-ly-nat-tung-gateway"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/quan-ly-no-nat-rule-theo-gateway"
                        },
                        {
                          type:  "doc",
                          id:  "gateway/tinh-nang-khac"
                        }
                      ]
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-floating-ip"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/Quản lý Subnets"
                    },
                    {
                      type:  "category",
                      label:  "Allow Address Pair",
                      collapsed:  true,
                      items:  [
                        {
                          type:  "doc",
                          id:  "allow-address-pair/allow-address-pair"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/initial-setup"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/create-address-pair"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/create-address-pair-on-instance-management"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/delete-address-pair"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/activity-log"
                        },
                        {
                          type:  "doc",
                          id:  "allow-address-pair/question-1"
                        }
                      ]
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Security Group",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-security-group"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-filter"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-priority-rule"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Terraform",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "terraform/terraform"
                    },
                    {
                      type:  "doc",
                      id:  "terraform/overview-terraform"
                    },
                    {
                      type:  "doc",
                      id:  "terraform/set-up"
                    },
                    {
                      type:  "doc",
                      id:  "terraform/document-terraform"
                    },
                    {
                      type:  "doc",
                      id:  "terraform/command-terraform"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Instance Group (Affinity & Anti-Affinity)",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "affinity-anti-affinity/affinity-anti-affinity"
                    },
                    {
                      type:  "doc",
                      id:  "affinity-anti-affinity/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "affinity-anti-affinity/create-instance-group"
                    },
                    {
                      type:  "doc",
                      id:  "affinity-anti-affinity/add-instance-instance-group"
                    },
                    {
                      type:  "doc",
                      id:  "affinity-anti-affinity/delete-instance-group"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Notification Bell",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "notification-bell/notification-bell"
                    },
                    {
                      type:  "doc",
                      id:  "notification-bell/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "notification-bell/show-notification"
                    },
                    {
                      type:  "doc",
                      id:  "notification-bell/see-notification-bell"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Project",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/project-structure"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-project"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/select-project-when-creating-VPC"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/header-project"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/new-quota"
                },
                {
                  type:  "category",
                  label:  "Auto Schedule",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/auto-schedule-to-on-off-instance"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/manage-version-schedules"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/create-new-instance"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/view-detail-instance"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/delete-instance-schedule"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/use-instance-schedules-for-virtual-machines"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/attach-schedule-to-instance"
                    },
                    {
                      type:  "doc",
                      id:  "auto-schedule-to-on-off-instance/detach-schedule-to-instance"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "VM Snapshot Schedule",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotVM"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-schedule-snapshotVM"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotVM"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotVM"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotVM"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Disk Snapshot Schedule",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotstorage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/createschedule-snapshotstorage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotstorage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotstorage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotstorage"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Lock & Unlock Instance Deletion",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "lock-unlock-instance-deletion/lock-unlock-instance-deletion"
                    },
                    {
                      type:  "doc",
                      id:  "lock-unlock-instance-deletion/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "lock-unlock-instance-deletion/lock-instance-deletion"
                    },
                    {
                      type:  "doc",
                      id:  "lock-unlock-instance-deletion/unlock-instance-deletion"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Change Network Config",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "change-network-config/change-network-config"
                    },
                    {
                      type:  "doc",
                      id:  "change-network-config/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "change-network-config/change-static-IP-in-Ubuntu-server"
                    },
                    {
                      type:  "doc",
                      id:  "change-network-config/change-static-IP-in-window-server"
                    },
                    {
                      type:  "doc",
                      id:  "change-network-config/change-statis-IP-in-CentOS"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Relation Management",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "relation-management/relation-management"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/initial-setup"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/tao-work-space"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/truy-cap-dich-vu"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/tag-management"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/component-management"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/relation-management-detail"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/datasource-relation-management"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/dashboard"
                    },
                    {
                      type:  "doc",
                      id:  "relation-management/alert"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cloud-server/question-2"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-1"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/cloud-server"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Global Search",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "global-search/global-search",
              label:  "Global Search"
            },
            {
              type:  "doc",
              id:  "global-search/global-search-usage",
              label:  "Using Global Search"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Storage",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "FPT Object Storage",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-object-storage/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Use Object Storage on FPT Portal",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-su-dung-object-storage-tren-fpt-portal",
                      label:  "Use Object Storage on FPT Portal"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-bucket",
                      label:  "Create a bucket"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-object",
                      label:  "Upload objects to a bucket"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-permissions",
                      label:  "Edit object permissions (ACL)"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-bucket-config",
                      label:  "Bucket configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-encryption",
                      label:  "Tutorials Encryption"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
                  label:  "Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-quan-ly-subuser",
                  label:  "Manage SubUsers on FPT Object Storage"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/SDK-API-Reference",
                  label:  "SDK API Reference"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/migrate-bucket-data",
                  label:  "Migrate Bucket Data"
                }
              ]
            },
            {
              type:  "category",
              label:  "Samples",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application",
                  label:  "Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/xay-dung-mot-website-tinh-bang-fpt-object-storage",
                  label:  "Xay Dung Mot Website Tinh Bang Fpt Object Storage"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/mount-bucket-thanh-o-dia-tren-may-local",
                  label:  "Mount Bucket Thanh O Dia Tren May Local"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau",
                  label:  "Clone Du Lieu Giua Hai Bucket Khac Nhau"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser",
                  label:  "Phan Quyen Su Dung Bucket Cho Cac Subuser"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-object-storage/tutorials-using-object-storage-on-s3-browser"
            },
            {
              type:  "doc",
              id:  "fpt-object-storage/tutorials-integrate-fpt-object-storage-with-s3-client"
            }
          ]
        },
        {
          type:  "category",
          label:  "File Storage - High Performance",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "file-storage-high-performance/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Vietnam Region",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/region-viet-nam",
                      label:  "Vietnam region"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/quan-ly-mountpoint",
                      label:  "Manage Mount Point"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                      label:  "Create Mount Point"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/Sử dụng File Storage - High Performance trên Kubernetes (K8S Cluster)",
                      label:  "Use File Storage High Performance on Kubernetes (K8S Cluster)"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Japan Region",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/region-nhat-ban",
                      label:  "Japan Region"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                      label:  "Use File Storage - High Performance on Baremetal GPU Server (Japan Region)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Network",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "VPN Site-to-Site",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "vpn-site-to-site/overviews-vpn",
              label:  "VPN Site-to-Site overview"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/create-vpn"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/view-vpn-"
                }
              ]
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/disable-VPN-Site-to-Site"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/enable-vpn-s2S"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/edit-vpn"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/edit-security-profile"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/download-config-"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/delete-vpn"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/VPN-Activity"
                }
              ]
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/authenticate-certificate-mode",
              label:  "Certificate Authentication"
            },
            {
              type:  "category",
              label:  "VPN Site to Site (new version)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Common VPN Device Configuration",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-pfsense"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-strongswan"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-vyos-1.5"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-checkpoint-r8120"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-aws-transitgw"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-aws-virtualgw"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-vmware"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Fortigate-guide"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-behind-NAT"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage VPN Connection",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/action-management"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/create-vpn-connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/edit-vpn-connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/enable-disable-vpn-connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/delete-vpn-connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/ket-noi-thiet-bi-behind-NAT-IP"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/create-customer-gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/edit-customer-gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/delete-customer-gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/permission-access-guide"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/setting-up-alerts-via-the-cloud-guard-service-guide"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/monitoring-service-through-monitoring-feature-guide"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/monitoring-service-through-logging-feature-guide"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/faq",
                  label:  "FAQ"
                }
              ]
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/tai-file-cau-hinh-vpn"
            }
          ]
        },
        {
          type:  "category",
          label:  "Load Balancer",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "load-balancer/load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/initial-setup"
            },
            {
              type:  "category",
              label:  "Load Balancer (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Load Balancer",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/create-load-balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/update-load-balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/monitor-load-balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/add-external-member"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/integrate-with-fmon"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/resize-load-balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/access-logs"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Listener",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/create-listener"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/configure-timeout"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/configure-l7-policy"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/redirect-http-to-https"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/redirect-prefix"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/enable-hsts"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/Allow-IP-CIDR"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/configure-sni"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Server Pool",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/create-server-pool"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/configure-health-check"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage SSL Certificate",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/import-ssl-certificate"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/delete-ssl-certificate"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "Classic Load Balancer (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Load Balancer",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/khoi tao mot load balancer moi"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/them may ao vao load balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xoa may ao khoi load balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/thay doi thong tin cau hinh load balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xoa load balancer"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage SSL Certificate",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/classic-import-ssl-certificate"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xem thong tin chi tiet ssl certificate"
                    }
                  ]
                }
              ]
            },
            {
              type:  "doc",
              id:  "load-balancer/khoi-tao-load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/cap-nhat-load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/theo-doi-bieu-do-load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/them-external-member"
            },
            {
              type:  "doc",
              id:  "load-balancer/khoi-tao-listener"
            },
            {
              type:  "doc",
              id:  "load-balancer/cau-hinh-timeout"
            },
            {
              type:  "doc",
              id:  "load-balancer/chinh-sua-listener"
            },
            {
              type:  "doc",
              id:  "load-balancer/redirect-http-request-sang-https"
            },
            {
              type:  "doc",
              id:  "load-balancer/enable-hsts-to-http-listener"
            },
            {
              type:  "doc",
              id:  "load-balancer/SNI-load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/khoi-tao-server-pool"
            },
            {
              type:  "doc",
              id:  "load-balancer/them-bot-member-cho-server-pool"
            },
            {
              type:  "doc",
              id:  "load-balancer/chinh-sua-cau-hinh-health-check"
            },
            {
              type:  "doc",
              id:  "load-balancer/quan-ly-ssl-certificate"
            },
            {
              type:  "doc",
              id:  "load-balancer/import-ssl-certificate-cho-load-balancer"
            },
            {
              type:  "doc",
              id:  "load-balancer/xoa-ssl-certificate"
            },
            {
              type:  "doc",
              id:  "load-balancer/tao import ssl certificate"
            }
          ]
        },
        {
          type:  "category",
          label:  "Create VPC",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "create-vpc/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "create-vpc/create-vpc",
                  label:  "Create VPC"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/create-vpc-en",
                  label:  "Create a VPC"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/rename-vpc-en",
                  label:  "Rename a VPC"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/view-activity-en",
                  label:  "View activity log and task status"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Container",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Managed - FPT Kubernetes Engine",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/Initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Kubernetes Cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/quan-ly-kubernetes-cluster",
                      label:  "Manage Kubernetes Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/khoi-tạo-kubernetes-cluster-moi",
                      label:  "Khoi TạO Kubernetes Cluster Moi"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster",
                      label:  "Access cluster detail information"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/lay-thong-tin-truy-cap-cluster",
                      label:  "Get cluster access information"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-rotate-kubeconfig",
                      label:  "Rotate Kubeconfig feature"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/xoa-kubernetes-cluster",
                      label:  "Delete a Kubernetes cluster"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Modify K8s Cluster Configuration",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-k8s-cluster",
                      label:  "Change K8s Cluster Configuration"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cluster-endponit-access",
                      label:  "Change Cluster Endpoint Access"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/them-worker-group",
                      label:  "Add a worker group"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-internal-subnet-load-balancer",
                      label:  "Change Internal Subnet Load Balancer Configuration"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group",
                      label:  "Edit Labels and Taints for Worker Group"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/bat-tat-node-auto-repair",
                      label:  "Enable/Disable Node Auto Repair"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chuyen-worker-group-base",
                      label:  "Change Base Worker Group"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/nang-cap-k8s-version",
                      label:  "Upgrade Kubernetes version"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cluster-autoscale",
                      label:  "Cluster autoscale"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool",
                  label:  "Deploy applications on a worker pool"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/scale-in-chi-dinh-node",
                  label:  "Scale In Specific Nodes"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/service-type-load-balancer",
                  label:  "Service Type Load Balancer"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/persistent-storage",
                  label:  "Persistent storage"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup",
                  label:  "Hibernate & Wake-up feature"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/tinh-nang-dat-lich-hibernate-wake-up",
                  label:  "Schedule Hibernate & Wake-up feature"
                },
                {
                  type:  "category",
                  label:  "Automatic Version Upgrade",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tu-dong-nang-cap-version",
                      label:  "Auto Upgrade Version feature"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gioi-thieu-chung-ve-quy-trinh-quan-ly-version",
                      label:  "Version Management Overview"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade",
                      label:  "Detailed Guide to Using Auto Upgrade"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/fpt-cloud-managed-kubernetes-release-calendar",
                  label:  "FPT cloud managed kubernetes release calendar"
                },
                {
                  type:  "category",
                  label:  "MFKE Security Enhancement",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-tang-cuong-bao-mat-mfke",
                      label:  "Security enhancement features for M-FKE"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-benchmark-cluster",
                      label:  "Cluster Benchmark feature"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-runtime-security-cluster",
                      label:  "Runtime Security feature"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-workload-scan",
                      label:  "Workload Scan feature"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/audit-log-vn",
                      label:  "Audit Log"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/danh-tag-cho-vm",
                  label:  "Tag VMs"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/backup-restore-vn",
                  label:  "Backup and Restore"
                }
              ]
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-m-fke",
              label:  "Notes when using MFKE"
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/mfke-faqs",
              label:  "FAQs"
            },
            {
              type:  "category",
              label:  "Samples",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/microservices-architecture-on-fke",
                  label:  "Microservices architecture on FKE"
                },
                {
                  type:  "category",
                  label:  "What is GPU?",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-la-gi",
                      label:  "What is a GPU?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-cloud",
                      label:  "Why use GPU on Cloud?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-kubernetes",
                      label:  "Why use GPU on Kubernetes?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-sharing",
                      label:  "GPU sharing"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/dich-vu-gpu-tren-k8s",
                      label:  "GPU Service on Kubernetes"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service",
                  label:  "Adjust CoreDNS Configuration in Kubernetes"
                },
                {
                  type:  "category",
                  label:  "Snapshot & Restore Persistent Volume in Kubernetes",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-và-restore-pvc-trên-k8s-fpt",
                      label:  "Snapshot and Restore Persistent Volume on Kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s",
                      label:  "Snapshot Persistent Volume on Kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/restore-persistent-volume-tren-k8s",
                      label:  "Restore Persistent Volume on Kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc",
                      label:  "Schedule PVC Snapshots"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot",
                      label:  "Schedule PVC Snapshot Deletion"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Proxy Protocol Configuration",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol",
                      label:  "Configure Proxy Protocol"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-istio-ingress",
                      label:  "Configure Proxy Protocol for Istio Ingress"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress",
                      label:  "Configure Proxy Protocol for Nginx Ingress"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/service-type-kb-layer7-lbv2",
                  label:  "Service Type Layer 7 Load Balancer"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-flavor-cua-worker-pool",
                  label:  "Change Worker Pool Flavor Configuration"
                }
              ]
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/list-created-cluster"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Kubernetes Engine with GPU",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/tong-quan-dich-vu-GPU",
              label:  "GPU Service Overview on Kubernetes FPT Cloud"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu",
              label:  "Installing and initializing a GPU Kubernetes cluster"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/thay-doi-worker-group-su-sung-gpu",
              label:  "Modifying a GPU worker group"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes",
              label:  "Deploying GPU applications on Kubernetes"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry",
              label:  "Using GPU telemetry"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu",
              label:  "Using Autoscaler with GPU"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing",
              label:  "Using GPU sharing modes"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu",
              label:  "Adding a GPU worker group"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/driver-installation-self-install",
              label:  "GPU driver installation guide on Kubernetes"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric",
              label:  "Configuring auto scale using GPU custom metrics"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus",
              label:  "Configuring auto scale using KEDA and Prometheus"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/fpt-kubernetes-engine-with-gpu",
              label:  "FPT Kubernetes Engine with GPU"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Container Registry",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Activate FPT Container Registry",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kich-hoat-dich-vu-fpt-container-registry",
                  label:  "Prerequisites for activating FPT Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kiem-tra-thong-tin-goi-dich-vu",
                  label:  "Check service plan information"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kich-hoat-dich-vu",
                  label:  "Activate the service"
                }
              ]
            },
            {
              type:  "category",
              label:  "Docker CLI Guide",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-su-dung-tren-docker-cli",
                  label:  "Use Docker CLI with FPT Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/docker-login",
                  label:  "Docker Login"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tag-va-push-image-len-fpt-container-registry",
                  label:  "Tag and push an image to FPT Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/pull-docker-image-tu-fpt-container-registry-ve-local",
                  label:  "Pull a Docker image from FPT Container Registry to local"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Repositories on FPT Portal",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-repositories-tren-fpt-portal",
                  label:  "Manage Repositories on FPT Portal"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xem-danh-sach-repositories",
                  label:  "View Repository List"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xoa-image-hoac-artifact-trong-repositories",
                  label:  "Delete images or artifacts in repositories"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Retention Rule",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-retention-rule",
                  label:  "Manage retention rules"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/them-moi-tag-retention-rule",
                  label:  "Add a tag retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-tag-retention-rule",
                  label:  "Manage tag retention rules"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cau-hinh-lap-lich-chay-retention-rule",
                  label:  "Schedule a retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-retention-run",
                  label:  "Manage retention runs"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Robot Account",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-robot-account",
                  label:  "Manage Robot Accounts"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tao-moi-robot-account",
                  label:  "Create a robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xem-danh-sach-robot-account",
                  label:  "View Robot Account List"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cap-nhat-robot-account",
                  label:  "Update a robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/disable-robot-account-dang-su-dung",
                  label:  "Disable a robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/enable-robot-account",
                  label:  "Enable a robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xoa-mot-robot-account",
                  label:  "Delete a robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/refresh-robot-account",
                  label:  "Refresh a robot account secret"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-su-dung-robot-account",
                  label:  "Use a robot account"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Service Package",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-goi-dich-vu",
                  label:  "Manage Service Packages"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cem-chi-tiet-quota-dich-vu",
                  label:  "View service quota details"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-nang-goi-dich-vu-dang-su-dung",
                  label:  "Upgrade your service plan"
                }
              ]
            },
            {
              type:  "category",
              label:  "Scan Images",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/scan-image",
                  label:  "Scan image"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/scan-image-1",
                  label:  "Scan an image"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/stop-scan",
                  label:  "Stop a scan"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-ket-qua-scan-images",
                  label:  "Manage image scan results"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Dedicated - FPT Kubernetes Engine",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/Initial-Setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Kubernetes Cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/quan-ly-kubernetes-cluster",
                      label:  "Manage Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi",
                      label:  "Create a new Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/xem-danh-sach-kubernetes-cluster-da-tao",
                      label:  "List created Kubernetes clusters"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster",
                      label:  "Access cluster detail information"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/lay-thong-tin-truy-cap-cluster",
                      label:  "Get cluster access information"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/xoa-kubernetes-cluster",
                      label:  "Delete a Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/stop-kubernetes-cluster",
                      label:  "Stop a Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/start-kubernetes-cluster",
                      label:  "Start a Kubernetes cluster"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Modify K8s Cluster Configuration",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/thay-doi-cau-hinh-k8s-cluster",
                      label:  "Change K8s cluster configuration"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/scale-worker-nodes",
                      label:  "Scale worker nodes"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/thay-doi-flavor-cau-hinh-nodes",
                      label:  "Change node configuration"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/thay-doi-flavor-cau-hinh-nfs",
                      label:  "Change NFS server configuration"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/tang-storage-size-cua-nodes",
                      label:  "Increase node storage size"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/tang-storage-size-cua-nfs",
                      label:  "Increase NFS server storage size"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/nang-cap-k8s-version",
                      label:  "Upgrade Kubernetes version"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage",
                      label:  "Add NFS persistent storage"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/AutoScale",
                  label:  "AutoScale"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/manual-scale",
                  label:  "Manual scale"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/best-practice-manual-scaling",
                  label:  "Best practices for manual scaling"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/persistent-storage",
                  label:  "Persistent storage"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/service-type-load-balancer",
                  label:  "Service Type Load Balancer"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/dfke-advanced-firewall",
                  label:  "DFKE Advanced Firewall"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/backup-and-restore-cluster",
                  label:  "Backup and restore a cluster"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version",
                  label:  "Best practices for upgrading FKE cluster version"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/auto-repair-nodes",
                  label:  "Auto repair nodes"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/retry-timeout-rule",
                  label:  "Retry Timeout Rule"
                }
              ]
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-fke",
              label:  "Notes when using DFKE"
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/dfke-faqs",
                  label:  "FAQs"
                }
              ]
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/create-new-k8s-cluster"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/list-created-clusters"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/access-clusters-detail-information"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/get-cluster-access-information"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/delete-k8s-cluster"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/stop-k8s-cluster"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/start-k8s-cluster"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/change-nodes-configuration"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/change-nfs-server-configuration"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nodes"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nfs-server"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/add-nfs-storage"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/auto-scale"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/advanced-firewall"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/backup-restore-cluster"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Security",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "IAM",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "iam/iam",
              label:  "IAM"
            },
            {
              type:  "doc",
              id:  "iam/Initial Setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Role",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/role-management"
                    },
                    {
                      type:  "doc",
                      id:  "iam/role-overview"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-role-list"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-role-detail"
                    },
                    {
                      type:  "doc",
                      id:  "iam/edit-role-and-permissions"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-role"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage User Group",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/overview-user-group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-user-group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-list-user-group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-detail-user-group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/edit-user-group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-user-group"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage IAM User",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/overview-iam-user"
                    },
                    {
                      type:  "doc",
                      id:  "iam/invite-iam-user"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-account-access-vpc"
                    },
                    {
                      type:  "doc",
                      id:  "iam/change-password"
                    },
                    {
                      type:  "doc",
                      id:  "iam/configure-2fa"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "IP Access",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/ip-access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/overview-ip-access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-ip-access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-ip-access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/ip-access-activity-log"
                    },
                    {
                      type:  "doc",
                      id:  "iam/download-access-log"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud WAPPLES",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Dashboard",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/overview",
                  label:  "Overview"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/detection-status",
                  label:  "Detection Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/service-status",
                  label:  "Service Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/load-balancing",
                  label:  "Statistics on the Status of Target Load Balancers for Each Configured Proxy"
                }
              ]
            },
            {
              type:  "category",
              label:  "Data Analysis",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/graphical-analysis",
                  label:  "Graphical Analysis"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/detection-log-analysis",
                  label:  "Detection Log Analysis"
                }
              ]
            },
            {
              type:  "category",
              label:  "View Logs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/detection-logs",
                  label:  "Detection Logs"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/audit-logs",
                  label:  "Audit Logs"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/website-logs",
                  label:  "Website Logs"
                }
              ]
            },
            {
              type:  "category",
              label:  "Security Settings",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Network Settings",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/proxy-ip",
                      label:  "Proxy IP"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/detinations-sever",
                      label:  "Destination Server"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/ssl-profile",
                      label:  "SSL Profile"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters",
                      label:  "Network Filters"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters-scheduling",
                      label:  "Network Filters Scheduling"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/policy-settings",
                  label:  "Policy Settings"
                },
                {
                  type:  "category",
                  label:  "Additional Policy Settings",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/x-forwarder-for",
                      label:  "X-Forwarded-For Header Configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/access-control",
                      label:  "Access Control"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/auto-blocking-filter",
                      label:  "Auto Blocking Filter"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/url-filter-settings",
                      label:  "URL Filter Settings"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Pattern Storage",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/user-defined-pattern",
                      label:  "User Defined Pattern"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/privacy-filtering",
                      label:  "Privacy Filtering"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/malicious-ip",
                      label:  "Malicious Ip"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/security-patch",
                  label:  "Security Patch"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-wapples/report-scheduling",
              label:  "Report Scheduling"
            },
            {
              type:  "category",
              label:  "Configuration",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/self-diagnostics",
                  label:  "Managing Alerts for System Status and Network Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/backup-restore",
                  label:  "Backup and Restore"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/intergration",
                  label:  "Integration Configuration with 3rd Party"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/network",
                  label:  "Network Administration Methods for Inbound and Outbound Access of Wapples"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/system",
                  label:  "System"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/fpt-cloud-wapples",
                  label:  "FPT Cloud WAPPLES"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud WAF",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-cloud-waf/Initial Setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/quan-ly-proxy-host",
                  label:  "Manage proxy host"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/quan-ly-nguoi-dung-cua-waf-dashboard",
                  label:  "Manage WAF Dashboard users"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/configure-waf-server-connection"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/create-proxy-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/delete-proxy-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/delete-waf-server"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/enable-disable-proxy-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/fpt-cloud-waf"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-404-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-access-list"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-proxy-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-redirection-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-security-rule-set"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-ssl-certificate"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-stream-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-waf-server-with-waf-dashboard"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/monitor-waf-server-with-dashboard-overview"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/tutorials-create-a-new-waf-server"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/tutorials-log-in-to-waf-dashboard"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/update-information-of-the-WAF-server"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/update-proxy-host"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/view-proxy-host-detail"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud VA",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-va/Initial Setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Target",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/quan-ly-target",
                      label:  "Manage targets"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/tao-target",
                      label:  "Create a target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/kiem-tra-trang-thai-target",
                      label:  "Check target scan status"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/update-target",
                      label:  "Edit target scan configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/scan-now",
                      label:  "Scan now"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xoa-target",
                      label:  "Delete a target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-header",
                      label:  "Get website headers for scan configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-cookie",
                      label:  "Get website cookies for scan configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/mo-remote-registry-window",
                      label:  "Enable Remote Registry on Windows for SMB"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "View Scan Results",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet",
                      label:  "View scan results"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/dashboard-ket-qua-quet",
                      label:  "Access the scan results dashboard"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-chi-tiet-ket-qua-quet",
                      label:  "View detailed scan results"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet-cu",
                      label:  "View scan history"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-va/xuat-bao-cao",
                  label:  "Export report"
                },
                {
                  type:  "doc",
                  id:  "fpt-va/fpt-va",
                  label:  "FPT Cloud VA"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Fortigate - FPT NGFW",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/truy-cap-giao-dien-quan-tri",
                  label:  "Access the admin interface"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-network-interfaces",
                  label:  "Configure network interfaces"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-static-routes",
                  label:  "Configure static routes"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-firewall-policy",
                  label:  "Create a firewall policy"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/xoa-firewall-policy",
                  label:  "Delete a firewall policy"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-security-profile",
                  label:  "Create security profiles"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/quan-ly-system-user-user-profile",
                  label:  "Manage system users and user profiles"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/feature-visibility",
                  label:  "Feature visibility"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/hien-thi-logs-traffic",
                  label:  "View traffic logs"
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/FAQ",
                  label:  "FAQ"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/fortigate-fpt-ngfw",
                  label:  "Fortigate – FPT NGFW"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "DdoS Protection",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "ddos-protection/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "ddos-protection/create-ddos",
                  label:  "Create DDoS Protection"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/monitor-ip",
                  label:  "Monitor protected IPs"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/ddos-protection",
                  label:  "DDoS Protection"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "CheckPoint - FPT NGFW",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Gaia Portal Guide",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/huong-dan-tren-gaia-portal",
                  label:  "Guide on Gaia Portal"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-gaia-portal",
                  label:  "Access Gaia Portal"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/network-interface",
                  label:  "Network Interface"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/static-route",
                  label:  "Static Route"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/cau-hinh-dns",
                  label:  "Configure DNS"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/update-hotfix",
                  label:  "Update Hotfix"
                }
              ]
            },
            {
              type:  "category",
              label:  "SmartConsole Guide",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/huong-dan-tren-smartconsole",
                  label:  "Guide on SmartConsole"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-smartconsole",
                  label:  "Access SmartConsole"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/install-policy",
                  label:  "Install Policy"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-object",
                  label:  "Create object"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-firewall",
                  label:  "Create firewall rule"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-nat",
                  label:  "Create NAT rule"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/dieu-tra-log",
                  label:  "Investigate logs"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-blades",
                  label:  "Manage Blades"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-account",
                  label:  "Manage accounts"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/checkpoint-fpt-ngfw",
                  label:  "Overview"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Monitoring Ip Access Control",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/fpt-monitoring-ip-access-control",
              label:  "FPT Monitoring – IP Access Control"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
              label:  "Create an FPT Cloud account and log in to FPT Portal"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/gioi-thieu-chung",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/truy-cap-tinh-nang",
              label:  "Access the IP Access Control feature"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quan-li-danh-sach-whitelisted-ip",
              label:  "Manage the whitelisted IP list"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip",
              label:  "View the whitelisted IP list"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/them-moi-whitelisted-ip",
              label:  "Add a whitelisted IP"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xoa-whitelisted-ip",
              label:  "Remove a whitelisted IP"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/retry-ip",
              label:  "Retry a failed IP operation"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quy-tac-he-thong",
              label:  "System rules"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/lien-he-ho-tro",
              label:  "Contact support"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Monitoring",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "FPT Reporting",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "reporting/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "reporting/tich-hop-dich-vu",
                  label:  "Service integration"
                },
                {
                  type:  "doc",
                  id:  "reporting/tao-report",
                  label:  "Create a report"
                },
                {
                  type:  "doc",
                  id:  "reporting/test-send-email",
                  label:  "Test send email"
                },
                {
                  type:  "doc",
                  id:  "reporting/view-detail",
                  label:  "View report details"
                },
                {
                  type:  "doc",
                  id:  "reporting/edit-report",
                  label:  "Edit a report"
                },
                {
                  type:  "doc",
                  id:  "reporting/delete-report",
                  label:  "Delete a report"
                },
                {
                  type:  "doc",
                  id:  "reporting/reporting",
                  label:  "Reporting"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud Monitoring",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-cloud-monitoring/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Detailed Guide",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/kich-hoat-dich-vu-fcmon",
                  label:  "Activate FPT Cloud Monitoring"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/xem-danh-sach-workspaces",
                  label:  "View the workspace list"
                },
                {
                  type:  "category",
                  label:  "3. Manage a Workspace",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/quan-ly-workspace",
                      label:  "Manage a workspace"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/xem-chi-tiet-workspace",
                      label:  "View workspace details"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/configuration-tab",
                      label:  "Configuration tab"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/user-management-tab",
                      label:  "User Management tab"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/quota-and-package-tab",
                      label:  "Quota and Package tab"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-infrastructure-platform",
                  label:  "Monitor infrastructure and platform"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-applications",
                  label:  "Monitor applications"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-public-endpoints",
                  label:  "Monitor public endpoints"
                },
                {
                  type:  "category",
                  label:  "7. Data Visualization",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truc-quan-hoa-du-lieu",
                      label:  "Data visualization"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truy-cap-vao-dashboard",
                      label:  "Access the dashboard"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/fcmon-dashboard-template",
                      label:  "Dashboard templates"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/alerting",
                  label:  "Alerting"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/explore-data",
                  label:  "Explore data"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/quan-tri-user",
                  label:  "User management"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/fpt-cloud-monitoring",
                  label:  "FPT Cloud Monitoring"
                }
              ]
            },
            {
              type:  "category",
              label:  "Huong Dan Su Dung Grafana",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-su-dung-grafana",
                  label:  "Overview"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/khoi-tao-workspace",
                  label:  "Create a workspace"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/truy-cap-grafana",
                  label:  "Access Grafana"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-template",
                  label:  "Integrate dashboard and alert rule templates"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-dashboard-template",
                  label:  "Integrate dashboard template"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-alert-rule-template",
                  label:  "Integrate alert rule template"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-kubernetes",
                  label:  "Monitoring Kubernetes integration"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s",
                  label:  "Kubernetes integration guide"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-metric",
                  label:  "View metric data"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-logs",
                  label:  "View log data"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-trace",
                  label:  "View trace data"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/query-metric-data",
                  label:  "Build custom metric queries"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-database",
                  label:  "Database monitoring integration"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-database",
                  label:  "Database integration guide"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-monitor",
                  label:  "View monitoring data"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/alerting",
                  label:  "Alerting"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tao-alert-rule",
                  label:  "Create an alert rule"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/contact-point",
                  label:  "Set up a Telegram bot contact point"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/usage",
                  label:  "Check Grafana usage"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/cau-hoi-thuong-gap",
                  label:  "Frequently asked questions"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Cloud Guard",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "cloud-guard/Overview",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "cloud-guard/Initial-Setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage Alert",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-virtual-machine",
                      label:  "Create an alert for Virtual Machine"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-object-storage",
                      label:  "Create an alert for Object Storage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-load-balancer",
                      label:  "Create an alert for Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-vpn",
                      label:  "Create an alert for VPN site-to-site"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-activity-alert",
                      label:  "Create an Activity Alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-threat-alert",
                      label:  "Create a Threat Alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/kiem-tra-trang-thai-cua-alert",
                      label:  "Check alert status"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/bat-tat-alert",
                      label:  "Enable or disable an alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-alert",
                      label:  "Edit an alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-alert",
                      label:  "Delete an alert"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Recipient",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/Recipient-la-gi",
                      label:  "What is a recipient?"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/tao-moi-recipient",
                      label:  "Create a recipient"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/recipient-teams",
                      label:  "Create a recipient via Microsoft Teams"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-recipient",
                      label:  "Edit a recipient"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-recipient",
                      label:  "Delete a recipient"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-guard/cloud-guard",
                  label:  "FPT Cloud Guard"
                }
              ]
            },
            {
              type:  "category",
              label:  "Cloud Advisor",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-introduction",
                  label:  "Introduction to Cloud Advisor"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-dashboard",
                  label:  "Dashboard overview"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-security",
                  label:  "Security issues"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-cost-optimization",
                  label:  "Cost optimization issues"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-fault-tolerance",
                  label:  "Fault tolerance issues"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Incident Management",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "incident-management/incident-management-overview",
              label:  "Incident Management"
            },
            {
              type:  "doc",
              id:  "incident-management/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "incident-management/configure-integrations",
              label:  "Configure Integrations"
            },
            {
              type:  "doc",
              id:  "incident-management/incoming-webhook",
              label:  "Incoming Webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/grafana-webhook",
              label:  "Grafana webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/outgoing-webhook",
              label:  "Outgoing Webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/atlassian-jira",
              label:  "Atlassian Jira"
            },
            {
              type:  "doc",
              id:  "incident-management/configure-incident-settings",
              label:  "Configure Incident Settings"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-label",
              label:  "Incident Label"
            },
            {
              type:  "doc",
              id:  "incident-management/slack",
              label:  "Slack"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-severity",
              label:  "Incident Severity"
            },
            {
              type:  "doc",
              id:  "incident-management/telegram",
              label:  "Telegram"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-status",
              label:  "Incident Status"
            },
            {
              type:  "doc",
              id:  "incident-management/microsoft-teams",
              label:  "Microsoft Teams"
            },
            {
              type:  "doc",
              id:  "incident-management/cau-hinh-settings",
              label:  "Configure Settings"
            },
            {
              type:  "doc",
              id:  "incident-management/create-incident",
              label:  "Create Incident"
            },
            {
              type:  "doc",
              id:  "incident-management/view-incident-detail",
              label:  "View Incident Detail"
            },
            {
              type:  "doc",
              id:  "incident-management/post-incident-activity",
              label:  "Post Incident Activity"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-status",
              label:  "Change The Incident Status"
            },
            {
              type:  "doc",
              id:  "incident-management/tao-incident",
              label:  "Create Incident"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-severity",
              label:  "Change The Incident Severity"
            },
            {
              type:  "doc",
              id:  "incident-management/declare-incident",
              label:  "Declare an incident directly"
            },
            {
              type:  "doc",
              id:  "incident-management/create-incident-via-webhook",
              label:  "Create an incident via incoming webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-data-visualization",
              label:  "Incident Data Visualization"
            },
            {
              type:  "doc",
              id:  "incident-management/manage-incidents",
              label:  "Manage incidents"
            },
            {
              type:  "doc",
              id:  "incident-management/quan-tri-incident",
              label:  "Manage Incidents"
            },
            {
              type:  "doc",
              id:  "incident-management/filter-incidents",
              label:  "Search and filter incidents"
            },
            {
              type:  "doc",
              id:  "incident-management/copy-activities-as-markdown",
              label:  "Copy activities as markdown"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Cloud Backup & DR",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "FPT Backup As a Service",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-backup-as-a-service/Chi tiết dịch vụ",
              label:  "Service details"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/install-veeam-agent-for-linux",
                  label:  "Install Veeam Agent for Linux"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/install-veeam-agent-for-windows",
                  label:  "Install Veeam Agent for Windows"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-file-and-folder-for-linux",
                  label:  "Restore files and folders for Linux"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-file-and-folder-for-windows",
                  label:  "Restore files and folders for Windows"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-window-vm-from-cloud-repository",
                  label:  "Restore a Windows VM from cloud repository"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository",
                  label:  "Restore a Linux VM from cloud repository"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/create-veeam-recovery-media",
                  label:  "Create Veeam Recovery Media"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/managing-alarms",
                  label:  "Managing alarms"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/fpt-backup-as-a-service",
                  label:  "FPT Backup as a Service"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Backup",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "backup/Backup-Initial-Setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/quan-ly-backup-job",
                  label:  "Manage Backup Jobs"
                },
                {
                  type:  "doc",
                  id:  "backup/restore-lai-vm-tu-cac-restore-point",
                  label:  "Restore a VM from Restore Points"
                },
                {
                  type:  "doc",
                  id:  "backup/clone-vm-tu-cac-restore-point",
                  label:  "Create a New VM from Restore Points"
                },
                {
                  type:  "doc",
                  id:  "backup/xem-lich-su-backup-and-recovery",
                  label:  "View Backup & Recovery History"
                },
                {
                  type:  "doc",
                  id:  "backup/kiem-tra-thong-tin-backup-va-restore-cua-vm",
                  label:  "Check VM Backup and Restore Information"
                },
                {
                  type:  "doc",
                  id:  "backup/backup-report",
                  label:  "Backup Report"
                },
                {
                  type:  "doc",
                  id:  "backup/backup-volume",
                  label:  "Backup Volume"
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud",
                  label:  "What support do I receive when renting a server and using the Backup service on FPT Cloud?"
                },
                {
                  type:  "doc",
                  id:  "backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung",
                  label:  "What is incremental backup and what are its benefits?"
                },
                {
                  type:  "doc",
                  id:  "backup/tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao",
                  label:  "Why do I sometimes see more Restore Points than the Latest Backup to Keep value I configured?"
                },
                {
                  type:  "doc",
                  id:  "backup/toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong",
                  label:  "I want to learn about Backup — does FPT Cloud have a trial policy?"
                },
                {
                  type:  "doc",
                  id:  "backup/backup",
                  label:  "Backup"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT DevSecOps Services",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "FPT Key Vault",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-key-vault/Initial Setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-key-vault/tutorials-khoi-tao-vault-instance",
                  label:  "Create a Vault Instance"
                },
                {
                  type:  "category",
                  label:  "Manage Secret Engine",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-secret-engine",
                      label:  "Create a Secret Engine"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-secret-engine",
                      label:  "Delete a Secret Engine"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Secret",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-secret-tren-secret-engine",
                      label:  "Create a Secret in a Secret Engine"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-secret",
                      label:  "Delete a Secret"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Policy",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-policy",
                      label:  "Create a Policy"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-policy",
                      label:  "Delete a Policy"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Auth Method",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-auth-method",
                      label:  "Create an Auth Method"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-role",
                      label:  "Create a Role"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Jenkins CI",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-jenkins-ci/Initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/kiem-tra-thong-tin-goi-dich-vu",
                  label:  "Check service package information"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/tao-moi-fpt-jenkinsCI",
                  label:  "Create a new FPT Jenkins CI"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xem-thong-tin-chi-tiet-jenkins-CI-instance",
                  label:  "View Jenkins CI instance details"
                },
                {
                  type:  "category",
                  label:  "Manage FPT Cloud Agent",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-fpt-cloud-agent",
                      label:  "Manage FPT Cloud Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-agent",
                      label:  "Add a new agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-thong-tin-cau-hinh-agent",
                      label:  "Update agent configuration"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-agent-khi-khong-muon-su-dung",
                      label:  "Delete an agent"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Credential",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-credential",
                      label:  "Manage credentials"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-credential",
                      label:  "Add a new credential"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-mot-credential",
                      label:  "Update a credential"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-mot-credential",
                      label:  "Delete a credential"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Configuration",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-cau-hinh",
                      label:  "Manage configurations"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-email-notifications",
                      label:  "Configure email notifications"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-sonarqube-servers",
                      label:  "Configure SonarQube servers"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-telegram-bots",
                      label:  "Configure Telegram Bots"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/upgrade-version",
                  label:  "Upgrade Jenkins version"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/nang-cap-goi-dich-vu",
                  label:  "Upgrade service package"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xoa-jenkins-instance-khi-khong-muon-su-dung",
                  label:  "Delete a Jenkins instance"
                },
                {
                  type:  "category",
                  label:  "Demo",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/demo",
                      label:  "Demo"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-dang-nhap-vao-fpt-cloud-jenkins-ci",
                      label:  "Log in to FPT Cloud Jenkins CI"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent",
                      label:  "Create jobs on Jenkins using FPT Cloud Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins",
                      label:  "Configure build nodes on Jenkins"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal",
                      label:  "Create a Jenkins CI/CD pipeline with Portal integrations"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/fpt-jenkins-ci",
                  label:  "Overview"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT ArgoCD",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-argocd/check-service-package-info",
              label:  "Check Service Package Info"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/create-fpt-argocd",
              label:  "Create FPT ArgoCD Instance"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/view-argocd-detail",
              label:  "View Details and Login"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/add-cluster-to-argocd",
              label:  "Connect Kubernetes Cluster"
            },
            {
              type:  "category",
              label:  "Configure Image Updater",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/cau-hinh-image-updater",
                  label:  "Configure Image Updater"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-images-updater",
                  label:  "Enable/Disable Image Updater"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-log-level",
                  label:  "Configure Log Level"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-secrets",
                  label:  "Manage Secrets"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-registry-secrets",
                  label:  "Manage Registry Secrets"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-container-registry",
                  label:  "Manage Container Registry"
                }
              ]
            },
            {
              type:  "category",
              label:  "Configure Webhook",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/cau-hinh-webhook",
                  label:  "Configure Webhook"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/add-webhook-secret",
                  label:  "Add Webhook Secret"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/Edit-webhook-secret",
                  label:  "Edit Webhook Secret"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/delete-webhook-secret",
                  label:  "Delete Webhook Secret"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-argocd/configure-build-options-kustomize",
              label:  "Configure Kustomize Build Options"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/configure-timereconcile",
              label:  "Configure TimeReconcile"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/configure-rbac",
              label:  "Configure RBAC Policy"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/configure-whitelist-ip",
              label:  "Configure Whitelist IP"
            },
            {
              type:  "doc",
              id:  "fpt-argocd/upgrade-service-package",
              label:  "Upgrade Service Package"
            },
            {
              type:  "category",
              label:  "Manage Account on ArgoCD",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/quan-ly-account-tren-argocd",
                  label:  "Manage Accounts on ArgoCD"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/create-account",
                  label:  "Create Account"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-account",
                  label:  "Enable/Disable Account"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-admin-account",
                  label:  "Manage Admin Account"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/update-admin-password",
                  label:  "Update Admin Password"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/edit-capabilities",
                  label:  "Edit capabilities"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/change-password",
                  label:  "Change password"
                }
              ]
            },
            {
              type:  "category",
              label:  "Manage Admin & Anonymous Users",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-admin-account-enable-disable-anonymous-user",
                  label:  "Manage Admin and Anonymous User"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-anonymous-user",
                  label:  "Enable/Disable Anonymous User"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-admin-user",
                  label:  "Enable/Disable Admin User"
                }
              ]
            },
            {
              type:  "category",
              label:  "OIDC SSO Configuration",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/cau-hinh-oidc-phuc-vu-sso-config",
                  label:  "Configure OIDC for SSO"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-oidc",
                  label:  "Enable/Disable OIDC"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/update-oidc-config",
                  label:  "Update OIDC Configuration"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-argocd/enable-applications-set",
              label:  "Enable ApplicationSet"
            },
            {
              type:  "category",
              label:  "Configure Notifications",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/cau-hinh-notifications",
                  label:  "Configure Notifications"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-notifications",
                  label:  "Enable/Disable Notifications"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-notification-channels",
                  label:  "Configure Notification Channels"
                }
              ]
            },
            {
              type:  "category",
              label:  "Demo",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/demo",
                  label:  "Demo"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-dang-nhap-vao-argocd",
                  label:  "Login to ArgoCD"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes",
                  label:  "Configure ArgoCD Cluster to Deploy Applications with Manifest"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options",
                  label:  "Deploy an Application with Kustomize using Build Options"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-deploy-applications-qua-helm-chart-repo",
                  label:  "Deploy Applications via Helm Chart Repository"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-deploy-applications-qua-argocd-cli",
                  label:  "Deploy Applications via ArgoCD CLI"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-su-dung-applicationset-de-deploy",
                  label:  "Deploy Applications using ApplicationSet"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-cau-hinh-notifications-de-nhan-thong-bao",
                  label:  "Configure Notifications to Receive Alerts"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-tich-hop-oidc-de-quan-ly-account",
                  label:  "Integrate OIDC for Account Management on ArgoCD"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/huong-dan-tich-hop-argocd-images-updater",
                  label:  "Integrate ArgoCD Image Updater"
                }
              ]
            },
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Integration",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "FPT API Management",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-api-management/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "category",
              label:  "Tutorials",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-api-management/khai-bao-thong-tin-tren-apimanager-application",
                  label:  "Configure information on ApiManager Application"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/analytics",
                  label:  "Analytics"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-api-management/consumer-api-usage-guide"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/declaring-information"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/fpt-api-management"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/manage-rest-apis"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/managing-consumers"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/managing-products"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/managing-sites"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/quick-starts"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/registering-on-fpt-portal"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT API Gateway",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-api-gateway/fpt-api-gateway",
              label:  "FPT API Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/tao-api-gateway",
              label:  "Create an API Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xem-thong-tin-api-gateway",
              label:  "View API Gateway details"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xoa-api-gateway",
              label:  "Delete an API Gateway"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT App Catalogs",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-app-catalogs/app-catalogs",
              label:  "App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/fpt-app-catalogs",
              label:  "FPT App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/create-a-new-fpt-app-catalogs",
              label:  "Create A New Fpt App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-app-catalog-details",
              label:  "View App Catalog Details"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/add-cluster-to-app-catalogs-management",
              label:  "Add Cluster To App Catalogs Management"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/manage-app-catalogs",
              label:  "Manage App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/quan-ly-app-catalogs",
              label:  "Manage App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/search-app-catalogs-from-a-repository",
              label:  "Search App Catalogs From A Repository"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/deploy-app-catalogs-to-cluster",
              label:  "Deploy App Catalogs To Cluster"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/manage-deployed-applications",
              label:  "Manage Deployed Applications"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/quan-ly-applications-da-duoc-deploy",
              label:  "Manage Deployed Applications"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/filter-deployed-appplications-by-cluster",
              label:  "Filter Deployed Appplications By Cluster"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-deployed-applications-details",
              label:  "View Deployed Applications Details"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/change-applications-configuration",
              label:  "Change Applications Configuration"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/rollback-an-application-to-the-old-configuration",
              label:  "Rollback An Application To The Old Configuration"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/upgrade-applications-to-the-latest-version",
              label:  "Upgrade Applications To The Latest Version"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/uninstall-applications",
              label:  "Uninstall Applications"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/delete-an-app-catalogs-mangement",
              label:  "Delete An App Catalogs Mangement"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Event Gateway",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-event-gateway/fpt-event-gateway",
              label:  "FPT Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-event-gateway",
              label:  "Create Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-event-gateway",
              label:  "View Event Gateway Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-event-gateway",
              label:  "Update Event Gateway Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-event-gateway",
              label:  "Delete Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-security",
              label:  "Manage Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-moi-security",
              label:  "Create Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-security",
              label:  "Update Security Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-security",
              label:  "Delete Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-router-group",
              label:  "Manage Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router-group",
              label:  "Create Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-router-group",
              label:  "View Router Group Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router-group",
              label:  "Update Router Group Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router-group",
              label:  "Delete Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-router",
              label:  "Manage Router"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router",
              label:  "Create Router"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router",
              label:  "Update Router Information"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router",
              label:  "Delete Router"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Kafka",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-kafka/fpt-kafka",
              label:  "FPT Kafka"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/quick-starts",
              label:  "Quick Starts"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-topics",
              label:  "Manage Topics"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-topics",
              label:  "Create Topics"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-topics",
              label:  "View Topics"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-topics",
              label:  "Edit Topics"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-topics",
              label:  "Delete Topics"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-credentials",
              label:  "Manage Credentials"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-credentials",
              label:  "Create Credentials"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-credentials",
              label:  "Edit Credentials"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-credentials",
              label:  "Delete Credentials"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-acls",
              label:  "Manage ACLs"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-acls",
              label:  "Create ACLs"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-acls",
              label:  "Delete ACLs"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-consumer-groups",
              label:  "Manage Consumer Groups"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-consumer-groups",
              label:  "Create Consumer Groups"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-consumer-groups",
              label:  "View Consumer Groups"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-consumer-groups",
              label:  "Delete Consumer Groups"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/demo",
              label:  "Demo"
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Message Bus",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-message-bus/fpt-message-bus-for-rabbitmq",
              label:  "Fpt Message Bus For Rabbitmq"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/fpt-message-bus",
              label:  "FPT Message Bus"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Quick-Starts",
              label:  "Quick Starts"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Manage-Queues",
              label:  "Manage Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/quan-ly-queues",
              label:  "Manage Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-queues",
              label:  "Create Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/tao-queues",
              label:  "Create a queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/View-queues",
              label:  "View Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xem-queues",
              label:  "View a queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Send-Receive-messages-in-queues",
              label:  "Send and receive messages in queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/gui-nhan-message-trong-queues",
              label:  "Send and receive messages in queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Delete-queues",
              label:  "Delete Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xoa-queues",
              label:  "Delete a queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Manage-topics",
              label:  "Manage Topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/quan-ly-topics",
              label:  "Manage topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-topics",
              label:  "Create Topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-Subscriptions",
              label:  "Create Subscriptions"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Edit-topics",
              label:  "Edit Topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Send-Receive-messages-in-topics",
              label:  "Send and receive messages in topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Delete-topics",
              label:  "Delete Topics"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Database Engine",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Managed - FPT Database Engines",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/fde-glossary",
              label:  "Fde Glossary"
            },
            {
              type:  "category",
              label:  "Concepts",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Version database engine",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/database-engine-version",
                      label:  "Database Engine versions"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/Version-List",
                      label:  "Version list"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/deployment-model",
                  label:  "Deployment Model"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/network-connectivity",
                  label:  "Network Connectivity"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/maintenance",
                  label:  "Maintenance"
                }
              ]
            },
            {
              type:  "category",
              label:  "Initial Setup",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/Initial-setup",
                  label:  "Initial setup"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/register-account",
                  label:  "Register Account"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/iam",
                  label:  "Iam"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/subnet",
                  label:  "Subnets"
                }
              ]
            },
            {
              type:  "category",
              label:  "Detailed Guide",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Manage FPT Database Engine",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/db-engine-service",
                      label:  "Database Engine service overview"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/active-db-service",
                      label:  "Activate database service"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/deactive-db-service",
                      label:  "Deactivate database service"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Initialize & Operate Database",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/db-manage-operate",
                      label:  "Db Manage Operate"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/view-db-list",
                      label:  "View Db List"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/create-db",
                      label:  "Create a database"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/db-view-detail",
                      label:  "Db View Detail"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/db-connect",
                      label:  "Connect to a database"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/db-operation",
                      label:  "Db Operation"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/upgrade-version",
                      label:  "Upgrade Version"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Backup & Restore",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/backup-restore",
                      label:  "Backup and restore"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/backup-mgmt",
                      label:  "Backup management"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/backup-job-mgmt",
                      label:  "Backup job management"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/on-off-pitr",
                      label:  "On Off Pitr"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/restore-db",
                      label:  "Restore Db"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/push-s3",
                      label:  "Push S3"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/resource",
                  label:  "Resource"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/kafka-user",
                  label:  "Kafka User"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/DB-proxy",
                  label:  "DB Proxy"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/vertical-scaling",
                  label:  "Vertical Scaling"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/maintenance-window",
                  label:  "Maintenance Window"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/notification",
                  label:  "Notification"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/monitoring",
                  label:  "Monitoring"
                },
                {
                  type:  "category",
                  label:  "Reporting",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/report-export",
                      label:  "Report Export"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-database-engine/report-schedule",
                      label:  "Report Schedule"
                    }
                  ]
                }
              ]
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/benchmark-sysbench",
              label:  "Benchmark with Sysbench"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/mysql-troubleshooting",
              label:  "Mysql Troubleshooting"
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/clickhouse-use-ha",
                  label:  "ClickHouse high availability"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Managed FPT Database Engines New",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/managed-fpt-database-engines-new",
              label:  "Introduction to FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/fde-glossary",
              label:  "Cloud & DBaaS glossary"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/database-engine-version",
              label:  "Database engine version"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-policy",
              label:  "Version policy"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-List",
              label:  "Supported version catalog"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deployment-model",
              label:  "Deployment model"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/network-connectivity",
              label:  "Network connectivity and accessibility"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance",
              label:  "Service maintenance"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Initial-setup",
              label:  "Initial setup requirements"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/login-console",
              label:  "Accessing FPT Console Portal"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/register-account",
              label:  "Registering an FPT Console Portal account"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/iam",
              label:  "FPT Database Engine service access permissions"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/role-management",
              label:  "Role management"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/user-group-management",
              label:  "User group management"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/subnet",
              label:  "Subnet management"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-engine-service",
              label:  "FPT Database Engine service management"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/active-db-service",
              label:  "Activating the FPT Database Engine service"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deactive-db-service",
              label:  "Deactivating the FPT Database Engine service"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-manage-operate",
              label:  "Database provisioning and operations"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/view-db-list",
              label:  "Viewing the database list"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/create-db",
              label:  "Creating a database"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-view-detail",
              label:  "Viewing database details"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-connect",
              label:  "Connecting to a database"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-operation",
              label:  "Database operations"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/upgrade-version",
              label:  "Upgrading the database version"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-restore",
              label:  "Backup types"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-mgmt",
              label:  "Managing the backup service"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-job-mgmt",
              label:  "Managing backup jobs"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/on-off-pitr",
              label:  "Enabling/disabling PITR"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/restore-db",
              label:  "Restoring a database"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/push-s3",
              label:  "Pushing backup data to S3"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/resource",
              label:  "Managing database cluster resources"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/parameter",
              label:  "Managing parameters"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/kafka-user",
              label:  "Apache Kafka - Managing Kafka ACL"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-proxy",
              label:  "Managing DB Proxy"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/vertical-scaling",
              label:  "Vertical scaling"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance-window",
              label:  "Maintenance window"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/notification",
              label:  "Configuring notifications"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/monitoring",
              label:  "Monitoring"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/log",
              label:  "Event logs"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/reporting",
              label:  "Reporting"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-export",
              label:  "Manual report export"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-schedule",
              label:  "Automated report scheduling"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/benchmark-sysbench",
              label:  "Sysbench benchmark results"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/mysql-troubleshooting",
              label:  "Error catalog"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Migration-cho-SQLServer",
              label:  "Migration for SQL Server"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/clickhouse-use-ha",
              label:  "ClickHouse high availability FAQ"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "Support",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "zalo-ticket-support/zalo-ticket-support",
          label:  "Zalo ticket support"
        },
        {
          type:  "category",
          label:  "Trellix Customer Guide",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "trellix-customer-guide/setting-agert",
              label:  "Setting Agert"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Access the administration interface"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Create Agent Installation Package"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Viewing Logs"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/client-task-mapping"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/trellix-customer-guide"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/report-guide"
            }
          ]
        },
        {
          type:  "category",
          label:  "Request Resource",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "end-user-request-resource/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/create-request-resource",
                  label:  "Create a Resource Request"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/view-request-resource",
                  label:  "View Submitted Requests"
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-1",
                  label:  "Can I create multiple requests at the same time?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-2",
                  label:  "How do I know FCI has received my request?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-3",
                  label:  "Can I select a VPC or create a new VPC when requesting a service?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-4",
                  label:  "Why can't I find the Request Resource section in the menu?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-5",
                  label:  "Why can't I click Submit to send the ticket?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/end-user-request-resource",
                  label:  "Resource Request"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Iac Old",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "iac-old/iac-old",
              label:  "Iac Old"
            },
            {
              type:  "doc",
              id:  "iac-old/overview",
              label:  "Configure the OpenStack Provider"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "Billing",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Cost Explorer",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cost-explorer/View-dashboards-and-specific-costs-by-service"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/customer-filter"
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cost-explorer/question-1"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/questions-2"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/cost-explorer"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Budget Alert",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "budget-alert/budget-alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/initiating-a-budget-alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/view-cost-information"
            },
            {
              type:  "doc",
              id:  "budget-alert/pause-budget-alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/edit-budget-alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/delete-budget-alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/setting-budget-alert"
            }
          ]
        },
        {
          type:  "category",
          label:  "Bills",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Quick Starts",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "billing/view-bills"
                },
                {
                  type:  "doc",
                  id:  "billing/view-bill-charges-by-service"
                },
                {
                  type:  "doc",
                  id:  "billing/view-bill-charges-by-resource"
                },
                {
                  type:  "doc",
                  id:  "billing/download-bills"
                },
                {
                  type:  "doc",
                  id:  "billing/billing-permission"
                }
              ]
            },
            {
              type:  "category",
              label:  "FAQs",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "billing/question-1"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-2"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-3"
                },
                {
                  type:  "doc",
                  id:  "billing/billing"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT AppSec",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Release note",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-appsec/aspm_v1.3.0",
              label:  "Release note: Schedule management (v1.3.0)"
            },
            {
              type:  "doc",
              id:  "fpt-appsec/aspm_v1.2.1",
              label:  "Release note: Issue life cycle management (v1.2.1)"
            }
          ]
        },
        {
          type:  "doc",
          id:  "fpt-appsec/initial-setup",
          label:  "Initial setup"
        },
        {
          type:  "category",
          label:  "Tutorials",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Dashboard",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/detail-dasboard",
                  label:  "Dashboard"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-dashboard-overview",
                  label:  "Dashboard metrics: Organization overview"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-issue-by-team",
                  label:  "Dashboard chart: Issues by team"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-asset-by-team",
                  label:  "Dashboard chart: Assets by team"
                }
              ]
            },
            {
              type:  "category",
              label:  "Organization Management",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/gioi-thieu-Organization",
                  label:  "Organization management"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/chinh-sua-thong-tin-org",
                  label:  "Edit organization information"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-member",
                  label:  "Manage members"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-role",
                  label:  "Manage roles"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-teams-org",
                  label:  "Manage teams"
                }
              ]
            },
            {
              type:  "category",
              label:  "Team Management",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-team",
                  label:  "Team management"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cai-dat-team",
                  label:  "Team settings"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-mem-team",
                  label:  "Manage team members"
                }
              ]
            },
            {
              type:  "category",
              label:  "Integration Management",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-integration",
                  label:  "Integration management"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-github",
                  label:  "GitHub Personal/Enterprise Cloud integration"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlab",
                  label:  "GitLab Cloud integration"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlabserver",
                  label:  "GitLab Server integration"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-fcr",
                  label:  "FPT Container Registry integration"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-harbor",
                  label:  "Harbor integration"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cicd-guideline",
                  label:  "DevOps pipeline integration"
                }
              ]
            },
            {
              type:  "category",
              label:  "Workspace Management",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-workspace",
                  label:  "Workspace management"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-scmasset",
                  label:  "Source code management asset operations"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-crasset",
                  label:  "Container Registry asset operations"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-list",
                  label:  "Change issue status in the Issue list"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-detail",
                  label:  "Manage issue status in the Issue detail screen"
                }
              ]
            },
            {
              type:  "category",
              label:  "Schedule Management",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/create-schedule",
                  label:  "Create a schedule"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-detail",
                  label:  "View schedule list and details"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-edit",
                  label:  "Edit a schedule"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-delete",
                  label:  "Delete a schedule"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-appsec/fpt-appsec",
              label:  "FPT AppSec"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "Managed GPU Cluster (Kubernetes)",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "fpt-managed-gpu-cluster/Initial-setup",
          label:  "Initial setup"
        },
        {
          type:  "category",
          label:  "Tutorials",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Manage Managed GPU Cluster",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/quan-ly-managed-gpu-cluster",
                  label:  "Manage GPU Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/khoi-tao-managed-gpu-cluster-moi",
                  label:  "Create a new Managed GPU Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xem-danh-sach-managed-gpu-cluster",
                  label:  "View Managed GPU Cluster list"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/lay-thong-tin-truy-cap-cluster",
                  label:  "Get cluster access information"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xoa-managed-gpu-cluster",
                  label:  "Delete a Managed GPU Cluster"
                }
              ]
            },
            {
              type:  "category",
              label:  "Modify K8S Cluster Configuration",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/thay-doi-cau-hinh-k8s",
                  label:  "Change K8s configuration"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/add-them-worker-group",
                  label:  "Add a worker group"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-manual-scale-managed-gpu-cluster",
                  label:  "Manual scale for Managed GPU Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster",
                  label:  "Edit labels and taints for a worker group"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-chuyen-worker-base-managed-gpu-cluster",
                  label:  "Change the base worker group"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/service-load-balancer-managed-gpu-cluster",
              label:  "Load balancer service for Managed GPU Cluster"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster",
              label:  "Deploy an application on Managed GPU Cluster"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/file-storage-high-performance",
              label:  "File Storage High Performance integration"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/slurm-on-fpt-cloud",
              label:  "SLURM on FPT Cloud"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/vgpu-for-container",
              label:  "vGPU feature in FPT Kubernetes Engine"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/gpu-time-sharing",
              label:  "GPU time sharing/time slicing in FPT Kubernetes Engine"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/mps-gpu-sharing",
              label:  "MPS GPU sharing"
            },
            {
              type:  "category",
              label:  "Deploy GPU Workload to Managed GPU Cluster",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/try-example-workload",
                  label:  "Try Example Workload"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/single-gpu-example",
                  label:  "Single GPU example: serving an LLM with vLLM"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-gpus-example",
                  label:  "Multi-GPU example: serving an LLM with vLLM"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-nodes-example",
                  label:  "Multi-node example: vLLM and multi-host serving"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/finetune-llm-models",
                  label:  "Fine-tuning an LLM model with Unsloth on Kubernetes"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/fpt-managed-gpu-cluster",
              label:  "FPT Managed GPU Cluster"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT AI Factory",
      collapsed:  true,
      items:  [
        {
          type:  "category",
          label:  "Ai Factory Billing",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "ai-factory-billing/ai-factory-billing",
              label:  "AI Factory Billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/overview",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/quick-start",
              label:  "Quick start"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/balance",
              label:  "Balance"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/how-to-create-an-user-token",
              label:  "How To Create An User Token"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/low-balance-threshold-alert",
              label:  "Low balance threshold alert"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/credit-history",
              label:  "Credit history"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/voucher-list",
              label:  "Voucher list"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-methods",
              label:  "Payment methods"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-calculation",
              label:  "Billing calculation"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/gpu-container-billing",
              label:  "GPU Container billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-hub-billing",
              label:  "Model Hub billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-finetuning-billing",
              label:  "Model Fine-Tuning billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/modas-billing",
              label:  "MoDaS billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/add-credits",
              label:  "Add credits"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/redeem-voucher",
              label:  "Redeem voucher"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-invoice",
              label:  "Payment Invoice"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-plan",
              label:  "Billing Plan"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-faq",
              label:  "Billing FAQ"
            }
          ]
        },
        {
          type:  "category",
          label:  "Ai Notebook",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "ai-notebook/ai-notebook",
              label:  "AI Notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/about-ai-notebooks",
              label:  "About AI Notebooks"
            },
            {
              type:  "doc",
              id:  "ai-notebook/get-started-jp",
              label:  "About AI Notebooks"
            },
            {
              type:  "doc",
              id:  "ai-notebook/quick-start-jp",
              label:  "Quick start"
            },
            {
              type:  "doc",
              id:  "ai-notebook/quick-start",
              label:  "Quick start"
            },
            {
              type:  "doc",
              id:  "ai-notebook/lauch-jp",
              label:  "Launch AI Notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/launch-ai-notebook",
              label:  "Launch AI Notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/create-jp",
              label:  "Create a notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/create-notebook",
              label:  "Create a notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/connect-switch-kernel",
              label:  "Connect and switch kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/switch",
              label:  "Connect and switch kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/shut-down-jp",
              label:  "Shut down kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/shut-down-kernel",
              label:  "Shut down kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/faq-jp",
              label:  "FAQ"
            },
            {
              type:  "doc",
              id:  "ai-notebook/faq",
              label:  "FAQ"
            }
          ]
        },
        {
          type:  "category",
          label:  "Ai Marketplace",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "ai_marketplace/ai_marketplace",
              label:  "AI Marketplace"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/overview",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/quick-start",
              label:  "Quick start"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/home-page",
              label:  "Home page"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/product-information",
              label:  "Product information"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/playground",
              label:  "Playground"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/fine-tune-with-lora",
              label:  "Fine-tune with LoRA"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deployment-lora-inference",
              label:  "Deploy LoRA inference"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/my-account",
              label:  "My account"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/balance",
              label:  "Balance"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/billing",
              label:  "Billing"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/contact-us",
              label:  "Contact us"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/how-to-create-an-api-key",
              label:  "Create an API key"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/api-integration",
              label:  "API integration"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deprecated-models",
              label:  "Deprecated models"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/FAQ",
              label:  "FAQ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/sign-in",
              label:  "Sign In"
            }
          ]
        },
        {
          type:  "category",
          label:  "Data Hub",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "data-hub/data-hub",
              label:  "Data Hub"
            },
            {
              type:  "doc",
              id:  "data-hub/initial-setup",
              label:  "Initial setup"
            },
            {
              type:  "doc",
              id:  "data-hub/create-connection",
              label:  "Create a connection"
            },
            {
              type:  "doc",
              id:  "data-hub/generate-dataset",
              label:  "Generate a dataset"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Fine Tuning",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-fine-tuning/model-fine-tuning",
              label:  "Model Fine-Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/concept",
              label:  "Concept"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/overview",
              label:  "Model Fine-Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/key-features",
              label:  "Key Features"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/what-is-model-fine-tuning",
              label:  "What Is Model Fine Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/faqs",
              label:  "Faqs"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/when-to-use-model-fine-tuning",
              label:  "When To Use Model Fine Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/quick-start",
              label:  "Model Fine-Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/sign-up-for-an-account",
              label:  "Sign Up For An Account"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/top-up-balance",
              label:  "Top Up Balance"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/create-pipeline",
              label:  "Create Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/step-by-step",
              label:  "Step By Step"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/how-to-create-pipeline",
              label:  "How To Create Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/training-configuration",
              label:  "Training Configuration"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-base-model",
              label:  "Select Base Model"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-data-format",
              label:  "Select Data Format"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-trainer",
              label:  "Select Trainer"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/set-hyperparameters",
              label:  "Set Hyperparameters"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-volume",
              label:  "Select Volume"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/manage-pipeline",
              label:  "Manage Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-dataset-format",
              label:  "Select Dataset Format"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-dataset",
              label:  "Select Dataset"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/set-up-hyperparameters",
              label:  "Set Up Hyperparameters"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/set-up-infrastructure",
              label:  "Set Up Infrastructure"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/view-execution-history",
              label:  "View Execution History"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/finish",
              label:  "Finish"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/view-execution-details",
              label:  "View Execution Details"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/how-to-manage-pipeline",
              label:  "How To Manage Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/start-pipeline",
              label:  "Start Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/cancel-pipeline",
              label:  "Cancel Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/edit-pipeline",
              label:  "Edit Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/delete-pipeline",
              label:  "Delete Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/execution-history",
              label:  "Execution History"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/execution-details",
              label:  "Execution Details"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/how-to-monitor-and-evaluate",
              label:  "How To Monitor And Evaluate"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/model-metrics",
              label:  "Model Metrics"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/system-metrics",
              label:  "System Metrics"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/logs",
              label:  "Logs"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/fine-tune-the-gemma-3-27B-instruct-model-for-financial-tasks",
              label:  "Fine Tune The Gemma 3 27B Instruct Model For Financial Tasks"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/jaist-accelerates-japanese-llm-development-with-fpt-ai-factory",
              label:  "Model Fine-Tuning"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/summary",
              label:  "Summary"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/about-jaist",
              label:  "About Jaist"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/challenges",
              label:  "Challenges"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/fpt-ai-factory-solution",
              label:  "Fpt Ai Factory Solution"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/business-impact",
              label:  "Business Impact"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/faq",
              label:  "Faq"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Hub",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-hub/model-hub",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/danh-sach-model-catalog",
              label:  "Danh Sach Model Catalog"
            },
            {
              type:  "doc",
              id:  "model-hub/initial-setup",
              label:  "Initial Setup"
            },
            {
              type:  "doc",
              id:  "model-hub/overview",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "model-hub/dang-nhap",
              label:  "Sign In"
            },
            {
              type:  "doc",
              id:  "model-hub/what-is-model-hub",
              label:  "What Is Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/danh-sach-model",
              label:  "Model List"
            },
            {
              type:  "doc",
              id:  "model-hub/how-does-it-work",
              label:  "How does it work"
            },
            {
              type:  "doc",
              id:  "model-hub/chi-tiet-model",
              label:  "Model Details"
            },
            {
              type:  "doc",
              id:  "model-hub/why-model-hub",
              label:  "Why Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/quick-start",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/tao-model",
              label:  "Create Model"
            },
            {
              type:  "doc",
              id:  "model-hub/sign-up-for-an-account",
              label:  "Sign Up For An Account"
            },
            {
              type:  "doc",
              id:  "model-hub/sua-model",
              label:  "Edit Model"
            },
            {
              type:  "doc",
              id:  "model-hub/top-up-balance",
              label:  "Top Up Balance"
            },
            {
              type:  "doc",
              id:  "model-hub/xoa-model",
              label:  "Delete Model"
            },
            {
              type:  "doc",
              id:  "model-hub/start-using-services",
              label:  "Start Using Services"
            },
            {
              type:  "doc",
              id:  "model-hub/tao-verison",
              label:  "Create Version"
            },
            {
              type:  "doc",
              id:  "model-hub/notice",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/update-version",
              label:  "Update Version"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-private-model",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/create-a-model",
              label:  "Create a model"
            },
            {
              type:  "doc",
              id:  "model-hub/upload-file",
              label:  "Upload File"
            },
            {
              type:  "doc",
              id:  "model-hub/download-file",
              label:  "Download File"
            },
            {
              type:  "doc",
              id:  "model-hub/view-list-model-2",
              label:  "View List Model 2"
            },
            {
              type:  "doc",
              id:  "model-hub/view-model-details",
              label:  "View Model Details"
            },
            {
              type:  "doc",
              id:  "model-hub/edit-a-model",
              label:  "Edit a model"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-a-model",
              label:  "Delete a model"
            },
            {
              type:  "doc",
              id:  "model-hub/share-detail-invited",
              label:  "Share Detail Invited"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-create-model-version",
              label:  "Create a model version"
            },
            {
              type:  "doc",
              id:  "model-hub/share-detail-joined",
              label:  "Share Detail Joined"
            },
            {
              type:  "doc",
              id:  "model-hub/create-version",
              label:  "Create a version"
            },
            {
              type:  "doc",
              id:  "model-hub/update-share",
              label:  "Update Share"
            },
            {
              type:  "doc",
              id:  "model-hub/Edit-version",
              label:  "Edit a version"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-share",
              label:  "Delete Share"
            },
            {
              type:  "doc",
              id:  "model-hub/clone-model",
              label:  "Clone Model"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-version",
              label:  "Delete a version"
            },
            {
              type:  "doc",
              id:  "model-hub/base-model",
              label:  "Base Model"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-upload-download-files-by-sdk",
              label:  "Upload and download files by SDK"
            },
            {
              type:  "doc",
              id:  "model-hub/create-organization",
              label:  "Create Organization"
            },
            {
              type:  "doc",
              id:  "model-hub/upload-files",
              label:  "Upload Files"
            },
            {
              type:  "doc",
              id:  "model-hub/download-files",
              label:  "Download files"
            },
            {
              type:  "doc",
              id:  "model-hub/view-update-organization",
              label:  "View Update Organization"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-file",
              label:  "Delete a file"
            },
            {
              type:  "doc",
              id:  "model-hub/model-deployment",
              label:  "Model Deployment"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-share-a-model",
              label:  "Share a model"
            },
            {
              type:  "doc",
              id:  "model-hub/model-catalog",
              label:  "Model Catalog"
            },
            {
              type:  "doc",
              id:  "model-hub/add-share",
              label:  "Add share"
            },
            {
              type:  "doc",
              id:  "model-hub/chi-tiet-model-catalog",
              label:  "Model Catalog Details"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-model-from-other-sources-like-hugging-face",
              label:  "Use models from other sources"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-model-catalog",
              label:  "Use Model Catalog"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Serving",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-serving/model-serving",
              label:  "Model Serving"
            },
            {
              type:  "doc",
              id:  "model-serving/about-fci",
              label:  "About FCI"
            },
            {
              type:  "doc",
              id:  "model-serving/general-intro-model-serving",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "model-serving/terms-definitions",
              label:  "Terms and definitions"
            },
            {
              type:  "doc",
              id:  "model-serving/initial-set-up",
              label:  "Initial setup"
            },
            {
              type:  "doc",
              id:  "model-serving/create-a-new-model-serving-deployment",
              label:  "Create a new deployment"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-list",
              label:  "Deployment list"
            },
            {
              type:  "doc",
              id:  "model-serving/status-actions-deployment",
              label:  "Deployment status and actions"
            },
            {
              type:  "doc",
              id:  "model-serving/detailed-configuration-information",
              label:  "Detailed configuration"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-configuration-information",
              label:  "Deployment configuration"
            },
            {
              type:  "doc",
              id:  "model-serving/traffic-setting-configuration-information",
              label:  "Traffic setting configuration"
            },
            {
              type:  "doc",
              id:  "model-serving/delete-a-deployment",
              label:  "Delete a deployment"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Testing Interactive Sessions",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/model-testing-interactive-sessions",
              label:  "Model Testing – Interactive..."
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/overview",
              label:  "Overview"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/what-is-model-testing-interactive-sessions",
              label:  "What is Model Testing – Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/when-to-use-model-testing-interactive-sessions",
              label:  "When To Use Model Testing Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/quick-start",
              label:  "Quick Start"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/sign-up-for-an-account",
              label:  "Sign Up For An Account"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/step-by-step",
              label:  "Step By Step"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/how-to-create-session",
              label:  "How To Create Session"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/how-to-manage-session",
              label:  "How To Manage Session"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/status-session",
              label:  "Status Session"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/stop-session",
              label:  "Stop Session"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/delete-session",
              label:  "Delete Session"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/how-to-evaluate-model",
              label:  "Model Testing – Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/playground",
              label:  "Playground"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/completion-history",
              label:  "Completion History"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/how-to-integrate-model",
              label:  "How To Integrate Model"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/faq",
              label:  "Faq"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Testing Test Jobs",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-testing-test-jobs/model-testing-test-jobs",
              label:  "Model Testing – Test..."
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/overview",
              label:  "Model Testing – Test Jobs"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/what-is-model-testing-test-jobs",
              label:  "What Is Model Testing Test Jobs"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/when-to-use-model-testing-test-jobs",
              label:  "When To Use Model Testing Test Jobs"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/quick-start",
              label:  "Model Testing – Test Jobs"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/sign-up-for-an-account",
              label:  "Sign Up For An Account"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/step-by-step",
              label:  "Step By Step"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-create-job",
              label:  "How To Create Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/select-model",
              label:  "Select Model"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/select-test-suite",
              label:  "Select Test Suite"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-select-data-format",
              label:  "Standard - Select Data Format"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-select-test-data",
              label:  "Standard Select Test Data"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-test-criteria",
              label:  "Standard Test Criteria"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/others-tasks",
              label:  "Others Tasks"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/set-up-parameters",
              label:  "Set Up Parameters"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/finish",
              label:  "Finish"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-manage-job",
              label:  "How To Manage Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-job",
              label:  "Run Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/cancel-job",
              label:  "Cancel Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/delete-job",
              label:  "Delete Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-history",
              label:  "Run History"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-evaluate-model",
              label:  "Model Testing – Test Jobs"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-details",
              label:  "Run Details"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/faq",
              label:  "Faq"
            }
          ]
        },
        {
          type:  "category",
          label:  "Model Testing",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "model-testing/model-testing"
            },
            {
              type:  "doc",
              id:  "model-testing/definition"
            },
            {
              type:  "doc",
              id:  "model-testing/key-features"
            },
            {
              type:  "doc",
              id:  "model-testing/create-an-interactive-session"
            },
            {
              type:  "doc",
              id:  "model-testing/test-models-response"
            },
            {
              type:  "doc",
              id:  "model-testing/completion-history"
            }
          ]
        }
      ]
    },
    {
      type:  "category",
      label:  "GPU Container",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "gpu-container/gpu-container",
          label:  "GPU Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/about-gpu-container",
          label:  "About Gpu Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/quick-start",
          label:  "Sign Up for an Account"
        },
        {
          type:  "doc",
          id:  "gpu-container/create-new-container",
          label:  "GPU Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/create-via-gui",
          label:  "Create Via Gui"
        },
        {
          type:  "doc",
          id:  "gpu-container/import-config",
          label:  "Import Config"
        },
        {
          type:  "doc",
          id:  "gpu-container/export-config",
          label:  "Export Config"
        },
        {
          type:  "doc",
          id:  "gpu-container/connect-container",
          label:  "Connect Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/manage-container",
          label:  "Manage Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/logs-and-monitoring",
          label:  "Logs And Monitoring"
        },
        {
          type:  "doc",
          id:  "gpu-container/templates",
          label:  "Templates"
        },
        {
          type:  "doc",
          id:  "gpu-container/storage",
          label:  "Storage"
        },
        {
          type:  "doc",
          id:  "gpu-container/billing-overview",
          label:  "Billing Overview"
        },
        {
          type:  "doc",
          id:  "gpu-container/payment-model",
          label:  "Payment Model"
        },
        {
          type:  "doc",
          id:  "gpu-container/pricing",
          label:  "Pricing"
        },
        {
          type:  "doc",
          id:  "gpu-container/add-credit",
          label:  "Add Credit"
        },
        {
          type:  "doc",
          id:  "gpu-container/jupyter-notebook-tutorials",
          label:  "Jupyter Notebook Tutorials"
        },
        {
          type:  "doc",
          id:  "gpu-container/vllm-use-cases",
          label:  "GPU Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/vllm-use-case",
          label:  "Vllm Use Case"
        },
        {
          type:  "doc",
          id:  "gpu-container/vllm-use-cases-gpt-oss",
          label:  "Vllm Use Cases Gpt Oss"
        },
        {
          type:  "doc",
          id:  "gpu-container/ollama-use-cases",
          label:  "Ollama Use Cases"
        },
        {
          type:  "doc",
          id:  "gpu-container/code-server-use-cases",
          label:  "Load fine-tuned model and tokenizer"
        },
        {
          type:  "doc",
          id:  "gpu-container/ubuntu-use-cases",
          label:  "Ubuntu Use Cases"
        },
        {
          type:  "doc",
          id:  "gpu-container/Action",
          label:  "Action"
        },
        {
          type:  "doc",
          id:  "gpu-container/billing",
          label:  "Billing"
        }
      ]
    },
    {
      type:  "category",
      label:  "GPU Virtual Machine En",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/gpu-virtual-machine-en",
          label:  "GPU Virtual Machine"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/overview",
          label:  "Overview"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/概要",
          label:  "Overview"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/quick-start",
          label:  "Quick Start"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/初期-設定",
          label:  "Initial Setup"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/fpt_images",
          label:  "Fpt_Images"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/クイック-スタート",
          label:  "Quick Start"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/custom-images",
          label:  "Custom Images"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/サブネット-の-作成",
          label:  "Create a Subnet"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/GPU-VM -インスタンス-の-作成",
          label:  "Create a GPU VM Instance"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/block-storage",
          label:  "Block Storage"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/IPアドレス（フローティングIP）の割り当て",
          label:  "Allocate a Floating IP"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/create-a-subnet",
          label:  "Create A Subnet"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/create-a-gpu-vm",
          label:  "Create A Gpu Vm"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/セキュリティグループの作成",
          label:  "Create a Security Group"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/floating-ip",
          label:  "Floating Ip"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/サーバーへのアクセス",
          label:  "Access to Servers"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/create-a-security-group",
          label:  "Create A Security Group"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/に関するよくある質問",
          label:  "FAQ"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/access-to-servers",
          label:  "Access To Servers"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/manage-gpu-vms",
          label:  "Manage Gpu Vms"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/monitor-gpu-vms",
          label:  "Monitor Gpu Vms"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/create-a-snapshot",
          label:  "Create A Snapshot"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/pfsense-network-gateway",
          label:  "Pfsense Network Gateway"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/faq",
          label:  "Faq"
        }
      ]
    },
    {
      type:  "category",
      label:  "Managed GPU Cluster Kubernetes Ja",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/managed-gpu-cluster-kubernetes-ja",
          label:  "Managed GPU Cluster (Kubernetes)"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/初期設定",
          label:  "Initial setup"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Managed-GPU ク-ラ-ス-タ-ー-の-管-理",
          label:  "Managing the Managed GPU Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/新-し-い- Managed-GPU -ク-ラ-ス-タ-ー-を-起-動",
          label:  "Launch a new Managed GPU Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/作成済みの Managed GPU クラスターの一覧を表示",
          label:  "View the list of created Managed GPU Clusters"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/クラスターのアクセス情報を取得",
          label:  "Get cluster access information"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Managed GPU クラスターを削除",
          label:  "Delete a Managed GPU Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/K8S クラスターの構成を変更",
          label:  "Change K8S cluster configuration"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループを追加",
          label:  "Add a worker group"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/マニュアルスケール機能",
          label:  "Manual scale feature"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのラベル-汚染を編集",
          label:  "Edit worker group labels and taints"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのベース切り替え機能",
          label:  "Worker group base switching feature"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/サービス種別：ロードバランサー",
          label:  "Service type: Load Balancer"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Ollama と Open WebUI を使用した DeepSeek-R1 モデルのデプロイ",
          label:  "Deploy the DeepSeek-R1 model using Ollama and Open WebUI"
        }
      ]
    },
    {
      type:  "category",
      label:  "Metal Cloud Ja",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "metal-cloud-ja/metal-cloud-ja",
          label:  "Metal Cloud"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/概要",
          label:  "What is Metal Cloud"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/クイックスタート",
          label:  "Quick start"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サーバーの作成",
          label:  "Create a server"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/Metal Cloud OS and Images",
          label:  "Custom image"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/Metal Cloud RAID",
          label:  "RAID definition"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/ユーザーデータ",
          label:  "User data"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サーバーアクション",
          label:  "Power a server on and off"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/アクセスサーバー",
          label:  "Console KVM"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サブネット",
          label:  "Create a subnet"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/ネットワーク ACL",
          label:  "Network ACL overview"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/監視サーバー",
          label:  "Monitor servers"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/FAQ",
          label:  "General"
        }
      ]
    },
    {
      type:  "category",
      label:  "FPT Data Platform",
      collapsed:  true,
      items:  [
        {
          type:  "doc",
          id:  "fpt-data-platform/initial-setup/initial-setup",
          label:  "Initial Setup"
        },
        {
          type:  "category",
          label:  "Workspace",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/gioi-thieu-workspace",
              label:  "Workspace"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/tao-workspace",
              label:  "Create workspace"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/xem-thong-tin-workspace",
              label:  "View workspace information"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/xoa-workspace",
              label:  "Delete workspace"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/keystore-management",
              label:  "Keystore Management"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/certificate-manager",
              label:  "Certificate Manager"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/workspace/monitoring",
              label:  "Monitoring"
            }
          ]
        },
        {
          type:  "category",
          label:  "CDC Service",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/cdc-service",
              label:  "CDC Service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/tao-cdc-service",
              label:  "Create CDC Service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/xem-thong-tin-cdc-service",
              label:  "View CDC Service Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/postgresql-source-connector",
              label:  "PostgreSQL Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mongoDB-source-connector",
              label:  "MongoDB Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/sql-server-source-connector",
              label:  "SQL Server Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mysql-source-connector",
              label:  "MySQL Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mariadb-source-connector",
              label:  "MariaDB Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/oracle-source-connector",
              label:  "Oracle Source Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/clickhouse-logs-sink-connector",
              label:  "ClickHouse (Logs) Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mongodb-sink-connector",
              label:  "MongoDB Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/postgresql-sink-connector",
              label:  "PostgreSQL Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/opensearch-sink-connector",
              label:  "OpenSearch Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/sql-server-sink-connector",
              label:  "SQL Server Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mysql-sink-connector",
              label:  "MySQL Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/mariadb-sink-connector",
              label:  "MariaDB Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/iceberg-sink-connector",
              label:  "Iceberg Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/clickhouse-replication-sink-connector",
              label:  "Clickhouse (Replication) Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/s3-sink-connector",
              label:  "S3 Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/elasticsearch-sink-connector",
              label:  "Elasticsearch Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/iceberg-logs-sink-connector",
              label:  "Iceberg (logs) Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/redis-sink-connector",
              label:  "Redis Sink Connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/tao-connector-source-kafka",
              label:  "Create connector source Kafka"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/tao-connector-source-s3",
              label:  "Create connector source S3"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/xem-thong-tin-connector",
              label:  "View details connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/hanh-dong-voi-connector",
              label:  "Actions with connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/xoa-connector",
              label:  "Delete connector"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/xem-thong-tin-snapshot",
              label:  "View details snapshot"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/trang-thai-snapshot",
              label:  "Status Snapshot"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/hanh-dong-voi-snapshot",
              label:  "Actions with Snapshot"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/xoa-cdc-service",
              label:  "Delete CDC Service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/cdc-service/kafka-mm2",
              label:  "Kafka MM2"
            }
          ]
        },
        {
          type:  "category",
          label:  "Apache Superset",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/superset/cai-dat-superset",
              label:  "Apache Superset"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/superset/tao-superset",
              label:  "Create Apache Superset"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/superset/xem-thong-tin-superset",
              label:  "View Apache Superset information"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/superset/xoa-superset",
              label:  "Delete Apache Superset"
            }
          ]
        },
        {
          type:  "category",
          label:  "JupyterHub",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/jupyterhub-guide",
              label:  "Jupyterhub"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/tao-Jupyterhub",
              label:  "Create JupyterHub"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/xem-thong-tin-juperterhub",
              label:  "View JupyterHub Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/xoa-jupyterhub",
              label:  "Delete JupyterHub"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/them-nguoi-dung",
              label:  "Add Users"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/tao-profile",
              label:  "Create Profile"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/phan-quyen-nguoi-dung-su-dung-profile",
              label:  "Assign User Profile Permissions"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/jupyterhub/dbt",
              label:  "Run dbt project on JupyterHub"
            }
          ]
        },
        {
          type:  "category",
          label:  "Ranger",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/guide-ranger",
              label:  "Ranger"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/tao-ranger",
              label:  "Create Ranger"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/xem-ranger",
              label:  "View Ranger Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/cau-hinh-va-quan-ly-query-engine",
              label:  "Access and Configure Query Engine Management"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/tag-sync",
              label:  "Tag Sync (OpenMetadata & Ranger Integration)"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ranger/xoa-ranger",
              label:  "Delete Ranger"
            }
          ]
        },
        {
          type:  "category",
          label:  "Hive Metastore",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/hive-metastore/hive-metastore",
              label:  "Hive Metastore"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/hive-metastore/tao-hive-metastore",
              label:  "Create Hive Metastore"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/hive-metastore/xem-thong-tin-hive-metastore",
              label:  "View Hive Metastore information"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/hive-metastore/xoa-hive-metastore",
              label:  "Delete Hive Metastore"
            }
          ]
        },
        {
          type:  "category",
          label:  "Query Engine",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/query-engine",
              label:  "Query Engine"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/tao-query-engine",
              label:  "Create Query Engine"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/xem-thong-tin-query-engine",
              label:  "View Query Engine Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/xoa-query-engine",
              label:  "Delete Query Engine"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/quan-ly-connectors",
              label:  "Manage Connectors"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/quan-ly-users",
              label:  "Manage Users"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/query-engine/quan-ly-Policies",
              label:  "Manage Policies"
            }
          ]
        },
        {
          type:  "category",
          label:  "Nessie",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/nessie/guide-nessie",
              label:  "Nessie"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/nessie/tao-nessie",
              label:  "Create Nessie"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/nessie/xem-thong-tin-nessie",
              label:  "View Nessie information"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/nessie/xoa-nessie",
              label:  "Delete Nessie"
            }
          ]
        },
        {
          type:  "category",
          label:  "Flink",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/flink/apache-flink",
              label:  "Apache Flink"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/flink/tao-apache-flink",
              label:  "Create Apache Flink"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/flink/xem-thong-tin-apache-flink",
              label:  "View Apache Flink information"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/flink/xoa-apache-flink",
              label:  "Delete Apache Flink"
            }
          ]
        },
        {
          type:  "category",
          label:  "Orchestration",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/userguide-airflow",
              label:  "Orchestration"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/tao-airflow",
              label:  "Create Orchestration"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/xem-thong-tin-orchestration",
              label:  "View Orchestration Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/xoa-orchestration",
              label:  "Delete Orchestration"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/huong-dan-airflow-dbt",
              label:  "Airflow & dbt Guide"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/huong-dan-airflow-my-workspace",
              label:  "Airflow & My Workspace Guide"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/huong-dan-airflow-job-submit",
              label:  "Airflow & Job Submit Guide"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/huong-dan-secert-backends",
              label:  "Secret Backends Guide"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/orchestration/huong-dan-airflow-workflow",
              label:  "Airflow Workflow Guide"
            }
          ]
        },
        {
          type:  "category",
          label:  "Ingestion Service",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/ingestion/cai-dat-ingestion-service",
              label:  "Ingestion service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ingestion/tao-ingestion",
              label:  "Create Ingestion"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ingestion/xem-thong-tin-ingestion",
              label:  "View Ingestion Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ingestion/xoa-ingestion",
              label:  "Delete Ingestion"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/ingestion/chinh-sua-ingestion",
              label:  "Edit Ingestion"
            }
          ]
        },
        {
          type:  "category",
          label:  "Processing Service",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/processing-service",
              label:  "Processing service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/tao-processing-service",
              label:  "Create Processing service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/xem-thong-tin-processing-service",
              label:  "View Processing service Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/xoa-processing-service",
              label:  "Delete Processing service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/quan-ly-compute",
              label:  "Manage Compute"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/processing/quan-ly-image-cua-compute",
              label:  "Manage Compute Images"
            }
          ]
        },
        {
          type:  "category",
          label:  "Open Metadata",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/open-metadata",
              label:  "Open Metadata"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/tao-open-metadata-service",
              label:  "Create Open Metadata service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/xem-thong-tin-open-metadata-service",
              label:  "View Open Metadata service Details"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/cap-nhat-open-metadata",
              label:  "Update Open Metadata"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/xoa-open-metadata",
              label:  "Delete Open Metadata service"
            },
            {
              type:  "doc",
              id:  "fpt-data-platform/open-metadata/huong-dan-su-dung-open-metadata",
              label:  "Open Metadata Usage Guide"
            }
          ]
        }
      ]
    }
  ]
};
