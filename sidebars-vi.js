// VI
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "tagging/create-tag-new",
                  label:  "Khởi tạo tag mới"
                },
                {
                  type:  "doc",
                  id:  "tagging/edit-tag",
                  label:  "Chỉnh sửa tag"
                },
                {
                  type:  "doc",
                  id:  "tagging/delete-tag",
                  label:  "Xóa tag đã tạo"
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
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
                      label:  "Quản lý tag cho tài nguyên"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-instance",
                      label:  "Quản lý tag cho Instance"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-storage-disk",
                      label:  "Quản lý tag cho ổ đĩa"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-snapshot",
                      label:  "Quản lý tag cho Snapshot"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-custom-image",
                      label:  "Quản lý tag cho Custom Image"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-floating-ip",
                      label:  "Quản lý tag cho Floating IP"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-subnet",
                      label:  "Quản lý tag cho Subnet"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tags-security-group",
                      label:  "Quản lý tag cho Security Group"
                    },
                    {
                      type:  "doc",
                      id:  "tagging/tagg-lb",
                      label:  "Quản lý tag cho Load Balancer"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "tagging/tagging-billing",
                  label:  "Thanh toán theo tag"
                },
                {
                  type:  "doc",
                  id:  "tagging/tagging",
                  label:  "Tổng quan Tagging"
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
              label:  "Tổng quan"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/config-sso",
                  label:  "Cấu hình SSO"
                },
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/use-sso",
                  label:  "Sử dụng SSO"
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
              label:  "Giới thiệu"
            },
            {
              type:  "doc",
              id:  "policy-management/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-overview-policy",
                  label:  "Khởi tạo nhanh Policy Management"
                },
                {
                  type:  "doc",
                  id:  "policy-management/apply-policy",
                  label:  "Áp dụng policy"
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-policy",
                  label:  "Khởi tạo Policy Management"
                },
                {
                  type:  "doc",
                  id:  "policy-management/edit-policy",
                  label:  "Chỉnh sửa policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/delete-policy",
                  label:  "Xóa policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/disable-policy",
                  label:  "Vô hiệu hóa policy"
                },
                {
                  type:  "doc",
                  id:  "policy-management/enable-policy",
                  label:  "Kích hoạt policy"
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
              label:  "Đăng ký, đăng nhập",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-ky",
                  label:  "Đăng ký tài khoản"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-nhap",
                  label:  "Đăng nhập"
                }
              ]
            },
            {
              type:  "category",
              label:  "Đăng ký thông tin cá nhân/ tổ chức",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/ choose-the-form-of-PAYG-and-verify-the-phon- number",
                  label:  "Chọn hình thức PAYG và xác thực số điện thoại"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/create-organization",
                  label:  "Tạo Organization"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/home-page-portal",
                  label:  "Trang chủ của hệ thống Portal"
                }
              ]
            },
            {
              type:  "category",
              label:  "Nạp tiền vào tài khoản",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/recharge-via-gift-code",
                  label:  "Nạp tiền thông qua gift code"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/deposit-money-via-VNPay",
                  label:  "Nạp tiền thông qua VNPay"
                }
              ]
            },
            {
              type:  "category",
              label:  "Mua máy ảo",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-virtual-machines",
                  label:  "Mua máy ảo"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-virtual-machine-configuration",
                  label:  "Thay đổi cấu hình máy ảo"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-Public-IP",
              label:  "Mua Public IP"
            },
            {
              type:  "category",
              label:  "Mua Storage",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-storage-disk",
                  label:  "Mua storage disk"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-removable-drive-capacity",
                  label:  "Thay đổi dung lượng ổ đĩa rời"
                }
              ]
            },
            {
              type:  "category",
              label:  "Xem billing các dịch vụ trên hệ thống",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-billing-by-monthly-reconciliation",
                  label:  "Xem billing theo kỳ đối soát hàng tháng"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-performed-transactions",
                  label:  "Xem transaction đã thực hiện"
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
              label:  "Điều kiện yêu cầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Đăng nhập với tài khoản SSO (Azure)",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-tai-khoan-SSO",
                      label:  "Đăng nhập với tài khoản SSO"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/SSO-qua-FCDClient-cu",
                      label:  "Qua FCDClient cũ (luồng cũ)"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Đăng nhập với Account/Password",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-account-password",
                      label:  "Đăng nhập với Account/Password"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-moi",
                      label:  "Qua FCDClient mới (khuyên dùng)"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-cu",
                      label:  "Qua FCDClient cũ (luồng cũ)"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "Câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-desktop/faq",
                  label:  "Câu hỏi thường gặp (FAQs)"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-desktop/fpt-cloud-desktop",
                  label:  "FPT Cloud Desktop là gì?"
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
              label:  "Quản lý Profile",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-profile",
                  label:  "Quản lý Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-profile",
                  label:  "Khởi tạo Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/doi-ten-profile",
                  label:  "Đổi tên Profile"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-profile",
                  label:  "Xóa Profile"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Group",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-group",
                  label:  "Quản lý Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-group",
                  label:  "Khởi tạo Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/giam-sat-group",
                  label:  "Giám sát Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/thay-doi-profile-cho-group",
                  label:  "Thay đổi Profile cho Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-thu-cong",
                  label:  "Scale thủ công"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-tu-dong-theo-lich-trinh",
                  label:  "Scale tự động theo lịch trình"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-group",
                  label:  "Xóa Group"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Policy",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-policy",
                  label:  "Quản lý Policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-policy",
                  label:  "Khởi tạo Policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-policy",
                  label:  "Xóa Policy"
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
              id:  "cloud-server/Initial-Setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Tạo một máy ảo",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quick-starts-tao-mot-may-ao",
                      label:  "Tạo một máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-vm-iso",
                      label:  "Lưu ý khi tạo máy ảo từ file ISO"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/clone-instance",
                  label:  "Nhân bản máy ảo"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-tatbat-may-ao",
                  label:  "Tắt/Bật máy ảo"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-khoi-dong-lai-may-ao",
                  label:  "Khởi động lại máy ảo"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/lock-unlock-instance-deletion",
                  label:  "Khóa & Mở khóa xóa máy ảo"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-xoa-may-ao",
                  label:  "Xóa máy ảo"
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý máy ảo",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-may-ao",
                      label:  "Quản lý máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-mot-may-ao-moi",
                      label:  "Khởi tạo một máy ảo mới"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-windows",
                      label:  "Kết nối vào máy ảo Windows"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-linux",
                      label:  "Kết nối vào máy ảo Linux"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/attach-a-network-card-to-the-virtual-machine",
                      label:  "Gắn thêm card mạng (NIC) vào máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/remove-the-network-card-from-the-virtual-machine",
                      label:  "Gỡ card mạng (NIC) khỏi máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao",
                      label:  "Tra cứu thông tin máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu",
                      label:  "Thay đổi cấu hình máy chủ"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-backup-may-chu-voi-snapshot",
                      label:  "Backup máy chủ với Snapshot"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý GPU với Portal Console",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/GPU",
                      label:  "Quản lý GPU với Portal Console"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-general",
                      label:  "Quản lý GPU với Console Portal"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-specific",
                      label:  "Quản lý GPU cho dịch vụ Specific"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý GPU Server với HPC Portal",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-gpu-voi-hpc-portal",
                      label:  "Quản lý GPU Server với HPC Portal"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-quick-start",
                      label:  "Hướng dẫn nhanh"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-change-package",
                      label:  "Đổi cấu hình máy"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-fixed-rental",
                      label:  "Đặt thời gian thuê cố định"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-snapshot-backup",
                      label:  "Sao lưu image"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-hardware-fixation",
                      label:  "Cố định máy vật lý"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-rest-machine",
                      label:  "Khởi động lại máy"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-schedule-shutdown",
                      label:  "Đặt lịch tắt máy"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-clone-image",
                      label:  "Clone image"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-level-2-password",
                      label:  "Đặt mật khẩu cấp 2"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-delete-image",
                      label:  "Xóa image"
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
                      id:  "cloud-server/block-storage",
                      label:  "Block Storage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tao-storage-disk",
                      label:  "Tạo Storage Disk"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gan-storage-disk-vao-may-ao",
                      label:  "Gắn Storage Disk vào máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/cau-hinh-o-dia-cho-may-ao-chay-windows",
                      label:  "Cấu hình ổ đĩa cho máy ảo chạy Windows"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/go-storage-disk-khoi-may-ao",
                      label:  "Gỡ Storage Disk khỏi máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-storage-disk",
                      label:  "Chỉnh sửa Storage Disk"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-storage-disk",
                      label:  "Xóa Storage Disk"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/profile-ssh-key",
                  label:  "SSH Key"
                },
                {
                  type:  "category",
                  label:  "Token",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/token",
                      label:  "Token"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-token",
                      label:  "Tạo Token"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/revoke-token",
                      label:  "Revoke Token"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/FQAs",
                      label:  "Câu hỏi thường gặp"
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
                      id:  "cloud-server/custom-images-overview",
                      label:  "Custom Images Overview"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tai-len-custom-image",
                      label:  "Tải lên Custom Image"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-custom-image",
                      label:  "Xóa Custom Image"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Instance Template",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-instance-template",
                      label:  "Quản lý Instance Template"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-template-tu-may-ao",
                      label:  "Khởi tạo template từ máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-template-duoc-tao-tu-may-ao",
                      label:  "Quản lý template trên Custom Images"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tao-instance-tu-template",
                      label:  "Tạo Instance từ template"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-xoa-template",
                      label:  "Xóa template"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/nat-instance",
                  label:  "NAT Instance"
                },
                {
                  type:  "category",
                  label:  "Quản lý NIC (Network Interface Card)",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/NIC-overview-1",
                      label:  "Quản lý NIC"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/overview-nic",
                      label:  "Tổng quan"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-card-NIC- Primary",
                      label:  "Khởi tạo card NIC Primary"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/disable-NIC-card",
                      label:  "Disable Network Interface Card"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/enable-NIC-card",
                      label:  "Enable Network Interface Card"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/add-card-NIC- new",
                      label:  "Thêm Network Interface Card mới"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/convert-card",
                      label:  "Chuyển card thường thành card Primary"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-ip-address",
                      label:  "Chỉnh sửa IP Address"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/change-address-MAC",
                      label:  "Thay đổi địa chỉ MAC"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-card-NIC",
                      label:  "Xóa Network Interface Card"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/change-network-config",
                      label:  "Thay đổi Network Config"
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
                      id:  "cloud-server/network-all",
                      label:  "Tổng quan Networking"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/networking-overview",
                      label:  "Chi tiết Networking"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gateway",
                      label:  "Gateway"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-floating-ip",
                      label:  "Quản lý Floating IP"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/Quản lý Subnets",
                      label:  "Quản lý Subnets"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/allow-address-pair",
                      label:  "Allow Address Pair"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Security Group",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-security-group",
                      label:  "Quản lý Security Group"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-filter",
                      label:  "Filter Security Group"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-priority-rule",
                      label:  "Quản lý Priority Rule"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/terraform",
                  label:  "IaC (Terraform)"
                },
                {
                  type:  "category",
                  label:  "Quản lý Instance Group với chính sách Affinity & Anti-Affinity",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/instance-group",
                      label:  "Instance Group — Affinity & Anti-Affinity"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/overview-affinity",
                      label:  "Giới thiệu"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-instance-group",
                      label:  "Tạo Instance Group mới"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-instance-group-specific",
                      label:  "Chỉnh sửa Instance Group"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/add-instance-instance-group",
                      label:  "Gắn máy ảo vào Instance Group"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-instance-group",
                      label:  "Xóa Instance Group"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/overview-bell",
                  label:  "Notification Bell"
                },
                {
                  type:  "category",
                  label:  "Quản lý Project",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/project-structure",
                      label:  "Quản lý Project"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-project",
                      label:  "Quản lý Project chi tiết"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/select-project-when-creating-VPC",
                      label:  "Chọn Project khi tạo VPC"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/header-project",
                      label:  "Thay đổi giao diện header"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/new-quota",
                  label:  "Dịch vụ PAYG"
                },
                {
                  type:  "category",
                  label:  "Auto schedule to on-off Instance",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/instance-schedule",
                      label:  "Lịch tắt/bật máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-overview",
                      label:  "Tổng quan"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-new-instance",
                      label:  "Tạo Instance Schedule"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/view-detail-instance",
                      label:  "Xem chi tiết"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/attach-schedule-to-instance",
                      label:  "Gắn máy ảo vào Schedule"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/detach-schedule-to-instance",
                      label:  "Gỡ máy ảo khỏi Schedule"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-instance-schedule",
                      label:  "Xóa Instance Schedule"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Lịch snapshot máy ảo",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotVM",
                      label:  "Lịch snapshot máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-schedule-snapshotVM",
                      label:  "Tạo lịch snapshot máy ảo"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotVM",
                      label:  "Xem chi tiết"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotVM",
                      label:  "Chỉnh sửa"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotVM",
                      label:  "Xóa lịch snapshot máy ảo"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Lịch snapshot ổ đĩa",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotstorage",
                      label:  "Lịch snapshot ổ đĩa"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/createschedule-snapshotstorage",
                      label:  "Tạo lịch snapshot ổ đĩa"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotstorage",
                      label:  "Xem chi tiết"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotstorage",
                      label:  "Chỉnh sửa"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotstorage",
                      label:  "Xóa lịch snapshot ổ đĩa"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "Các câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cloud-server/question-2",
                  label:  "FAQ: Tùy chỉnh rule Security Group"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-1",
                  label:  "FAQ: Hiệu chỉnh Address Pair"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-",
                  label:  "FAQ: NAT Instance"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/cloud-server",
                  label:  "Tổng quan"
                }
              ]
            },
            {
              type:  "category",
              label:  "Affinity Anti Affinity",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/affinity-anti-affinity",
                  label:  "Tổng quan"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/create-instance-group",
                  label:  "Khởi tạo Instance Group"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/add-instance-instance-group",
                  label:  "Gắn Instance vào Instance Group"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/delete-instance-group",
                  label:  "Xóa Instance Group"
                }
              ]
            },
            {
              type:  "category",
              label:  "Allow Address Pair",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "allow-address-pair/allow-address-pair",
                  label:  "Allow Address Pair"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/create-address-pair",
                  label:  "Tạo address pair"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/create-address-pair-on-instance-management",
                  label:  "Tạo address pair trong Instance Management"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/delete-address-pair",
                  label:  "Xóa address pair"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/activity-log",
                  label:  "Activity Log"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/question-1",
                  label:  "Thay đổi cấu hình address pair"
                }
              ]
            },
            {
              type:  "category",
              label:  "Auto Schedule To On Off Instance",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/auto-schedule-to-on-off-instance",
                  label:  "Auto schedule bật/tắt instance"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/manage-version-schedules",
                  label:  "Quản lý instance schedules"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/create-new-instance",
                  label:  "Tạo một instance schedule mới"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/view-detail-instance",
                  label:  "Xem chi tiết một instance schedule"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/delete-instance-schedule",
                  label:  "Xóa một instance schedule"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/use-instance-schedules-for-virtual-machines",
                  label:  "Sử dụng instance schedule cho máy ảo"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/attach-schedule-to-instance",
                  label:  "Gắn máy ảo vào instance schedule"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/detach-schedule-to-instance",
                  label:  "Gỡ máy ảo khỏi instance schedule"
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
                  id:  "change-network-config/change-network-config",
                  label:  "Thay đổi cấu hình mạng"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-static-IP-in-Ubuntu-server",
                  label:  "Đặt IP tĩnh trên Ubuntu Server"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-static-IP-in-window-server",
                  label:  "Đặt IP tĩnh trên Windows Server"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-statis-IP-in-CentOS",
                  label:  "Đặt IP tĩnh trên CentOS"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-portal/fpt-cloud-portal",
              label:  "FPT Cloud Portal"
            },
            {
              type:  "category",
              label:  "Gateway",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "gateway/gateway",
                  label:  "Gateway"
                },
                {
                  type:  "doc",
                  id:  "gateway/huong-dan",
                  label:  "Hướng dẫn truy cập"
                },
                {
                  type:  "doc",
                  id:  "gateway/quan-ly-danh-sach-gateway",
                  label:  "Quản lý danh sách Gateway"
                },
                {
                  type:  "doc",
                  id:  "gateway/quan-ly-route-1-gateway",
                  label:  "Quản lý Route"
                },
                {
                  type:  "doc",
                  id:  "gateway/quan-ly-nat-tung-gateway",
                  label:  "Quản lý NAT Rule"
                },
                {
                  type:  "doc",
                  id:  "gateway/quan-ly-no-nat-rule-theo-gateway",
                  label:  "Quản lý NO NAT Rule"
                },
                {
                  type:  "doc",
                  id:  "gateway/tinh-nang-khac",
                  label:  "Tính năng khác"
                }
              ]
            },
            {
              type:  "category",
              label:  "Lock Unlock Instance Deletion",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/lock-unlock-instance-deletion",
                  label:  "Khóa & mở khóa xóa máy ảo"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/lock-instance-deletion",
                  label:  "Khóa xóa máy ảo"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/unlock-instance-deletion",
                  label:  "Mở khóa xóa máy ảo"
                }
              ]
            },
            {
              type:  "category",
              label:  "Nat Instance",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "nat_instance/nat_instance",
                  label:  "NAT Instance"
                },
                {
                  type:  "doc",
                  id:  "nat_instance/overview-nat-instance",
                  label:  "Tổng quan NAT Instance"
                },
                {
                  type:  "doc",
                  id:  "nat_instance/Initial-Setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "nat_instance/use-nat-instance",
                  label:  "Tính năng chỉ áp dụng cho người dùng mua dịch vụ loại General"
                },
                {
                  type:  "doc",
                  id:  "nat_instance/setting-nat-instance",
                  label:  "Cấu hình NAT Instance"
                },
                {
                  type:  "doc",
                  id:  "nat_instance/question",
                  label:  "NAT Instance có thể được sử dụng như một instance thông thường không?"
                }
              ]
            },
            {
              type:  "category",
              label:  "Nic",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "nic/nic",
                  label:  "Network Interface Card (NIC)"
                },
                {
                  type:  "doc",
                  id:  "nic/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "nic/create-card-NIC- Primary",
                  label:  "Khởi tạo card NIC Primary"
                },
                {
                  type:  "doc",
                  id:  "nic/disable-NIC-card",
                  label:  "Disable card NIC"
                },
                {
                  type:  "doc",
                  id:  "nic/enable-NIC-card",
                  label:  "Enable card NIC"
                },
                {
                  type:  "doc",
                  id:  "nic/add-card-NIC- new",
                  label:  "Thêm card NIC mới"
                },
                {
                  type:  "doc",
                  id:  "nic/convert-card",
                  label:  "Chuyển card thành Primary"
                },
                {
                  type:  "doc",
                  id:  "nic/edit-ip-address",
                  label:  "Chỉnh sửa địa chỉ IP"
                },
                {
                  type:  "doc",
                  id:  "nic/change-address-MAC",
                  label:  "Thay đổi địa chỉ MAC"
                },
                {
                  type:  "doc",
                  id:  "nic/delete-card-NIC",
                  label:  "Xóa card NIC"
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
                  id:  "notification-bell/notification-bell",
                  label:  "Notification Bell"
                },
                {
                  type:  "doc",
                  id:  "notification-bell/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "notification-bell/show-notification",
                  label:  "Xem biểu tượng chuông thông báo"
                },
                {
                  type:  "doc",
                  id:  "notification-bell/see-notification-bell",
                  label:  "Xem danh sách thông báo"
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
                  id:  "relation-management/relation-management",
                  label:  "Relation Management"
                },
                {
                  type:  "doc",
                  id:  "relation-management/initial-setup",
                  label:  "Thiết lập ban đầu"
                },
                {
                  type:  "doc",
                  id:  "relation-management/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
                  label:  "Tao Tai Khoan Fpt Cloud Va Dang Nhap Vao Fpt Portal"
                },
                {
                  type:  "doc",
                  id:  "relation-management/tao-work-space",
                  label:  "Tao Work Space"
                },
                {
                  type:  "doc",
                  id:  "relation-management/truy-cap-dich-vu",
                  label:  "Các bước thực hiện như sau:"
                },
                {
                  type:  "doc",
                  id:  "relation-management/tag-management",
                  label:  "Tag Management"
                },
                {
                  type:  "doc",
                  id:  "relation-management/component-management",
                  label:  "Component Management"
                },
                {
                  type:  "doc",
                  id:  "relation-management/relation-management-detail",
                  label:  "1, Tạo relation"
                },
                {
                  type:  "doc",
                  id:  "relation-management/datasource-relation-management",
                  label:  "Datasource Relation Management"
                },
                {
                  type:  "doc",
                  id:  "relation-management/dashboard",
                  label:  "Bảng điều khiển"
                },
                {
                  type:  "doc",
                  id:  "relation-management/alert",
                  label:  "Alert"
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
                  id:  "terraform/terraform",
                  label:  "Terraform"
                },
                {
                  type:  "doc",
                  id:  "terraform/overview-terraform",
                  label:  "Tổng quan Terraform"
                },
                {
                  type:  "doc",
                  id:  "terraform/set-up",
                  label:  "Hướng dẫn cài đặt"
                },
                {
                  type:  "doc",
                  id:  "terraform/document-terraform",
                  label:  "Tài liệu Terraform"
                },
                {
                  type:  "doc",
                  id:  "terraform/command-terraform",
                  label:  "Script tài nguyên Terraform"
                }
              ]
            },
            {
              type:  "category",
              label:  "User Token",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "user-token/user-token",
                  label:  "Token"
                },
                {
                  type:  "doc",
                  id:  "user-token/overview",
                  label:  "Tổng quan"
                },
                {
                  type:  "doc",
                  id:  "user-token/create-token",
                  label:  "Tạo token mới"
                },
                {
                  type:  "doc",
                  id:  "user-token/quick-start",
                  label:  "Quick Start"
                },
                {
                  type:  "doc",
                  id:  "user-token/revoke-token",
                  label:  "Thu hồi token"
                },
                {
                  type:  "doc",
                  id:  "user-token/fqas",
                  label:  "Câu hỏi thường gặp"
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
              label:  "Tìm kiếm toàn cục"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Sử dụng Object Storage trên FPT Portal",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-su-dung-object-storage-tren-fpt-portal",
                      label:  "Sử dụng trên FPT Portal"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-bucket",
                      label:  "Quản lý bucket"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-object",
                      label:  "Quản lý object"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-permissions",
                      label:  "Permissions"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-bucket-config",
                      label:  "A. Tạo Lifecycle Rule mới"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-object-storage/tutorials-encryption",
                      label:  "Cách Hoạt Động Của SSE-C"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
                  label:  "Quản lý Access Key"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-quan-ly-subuser",
                  label:  "Quản Lý SubUser Trên..."
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-using-object-storage-on-s3-browser",
                  label:  "Sử dụng Object Storage trên S3 Browser"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-integrate-fpt-object-storage-with-s3-client",
                  label:  "Tích hợp FPT Object Storage với các S3-Client"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/SDK-API-Reference",
                  label:  "Cài đặt"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/migrate-bucket-data",
                  label:  "tương thích với AWS S3"
                }
              ]
            },
            {
              type:  "category",
              label:  "Một số gợi ý mẫu (Samples)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application",
                  label:  "Sử dụng FPT Object Storage làm media server"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/xay-dung-mot-website-tinh-bang-fpt-object-storage",
                  label:  "Xây dựng một website tĩnh bằng FPT Object Storage"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/mount-bucket-thanh-o-dia-tren-may-local",
                  label:  "Mount bucket thành ổ đĩa trên máy local"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau",
                  label:  "Clone dữ liệu giữa hai bucket khác nhau"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser",
                  label:  "Phân quyền sử dụng bucket cho các subuser"
                }
              ]
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Region Việt Nam",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/region-viet-nam",
                      label:  "Region Việt Nam"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/quan-ly-mountpoint",
                      label:  "Quản lý MountPoint"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                      label:  "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/Sử dụng File Storage - High Performance trên Kubernetes (K8S Cluster)",
                      label:  "Sử DụNg File Storage   High Performance TrêN Kubernetes (K8S Cluster)"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                  label:  "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
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
              label:  "Tổng quan VPN Site-to-Site"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/create-vpn",
                  label:  "Khởi tạo VPN Site-to-Site"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/view-vpn-",
                  label:  "Xem thông tin VPN"
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/disable-VPN-Site-to-Site",
                  label:  "Vô hiệu hóa VPN"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/enable-vpn-s2S",
                  label:  "Kích hoạt VPN"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/edit-vpn",
                  label:  "Chỉnh sửa thông tin VPN"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/edit-security-profile",
                  label:  "Chỉnh sửa Security Profile"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/download-config-",
                  label:  "Tải cấu hình VPN"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/delete-vpn",
                  label:  "Xóa VPN Site-to-Site"
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/VPN-Activity",
                  label:  "Xem Activity log VPN"
                }
              ]
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/authenticate-certificate-mode",
              label:  "Xác thực bằng Certificate"
            },
            {
              type:  "category",
              label:  "VPN Site to Site (new version)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Cấu hình thiết bị VPN phổ biến",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Palo-Alto-guide",
                      label:  "Cấu hình VPN Site-to-Site với Palo Alto"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-pfsense",
                      label:  "Cấu hình VPN Site-to-Site với PfSense"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-strongswan",
                      label:  "Cấu hình VPN Site-to-Site với strongSwan"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-vyos-1.5",
                      label:  "Cấu hình VPN Site-to-Site với Vyos 1.5"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-checkpoint-r8120",
                      label:  "Cấu hình VPN Site-to-Site với CheckPoint R81.20"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-aws-transitgw",
                      label:  "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-aws-virtualgw",
                      label:  "I. Cấu hình VPN Site-to-Site trên AWS"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-fci-vmware",
                      label:  "Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Fortigate-guide",
                      label:  "Cấu hình VPN Site-to-Site với Fortigate"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/connect-behind-NAT",
                      label:  "Cấu hình VPN Site-to-Site với các thiết bị NAT IP"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý & thao tác VPN Connection",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/action-management",
                      label:  "Quản lý & thao tác VPN Connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/create-vpn-connection",
                      label:  "Hướng dẫn khởi tạo VPN Connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/edit-vpn-connection",
                      label:  "Hướng dẫn chỉnh sửa VPN Connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/enable-disable-vpn-connection",
                      label:  "Hướng dẫn enable/disable VPN Connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/delete-vpn-connection",
                      label:  "Hướng dẫn xóa VPN Connection"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/tai-file-cau-hinh-vpn",
                      label:  "Hướng dẫn download file config VPN"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/ket-noi-thiet-bi-behind-NAT-IP",
                      label:  "Hướng dẫn kết nối thiết bị Behind NAT IP"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/create-customer-gateway",
                      label:  "Hướng dẫn tạo Customer gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/edit-customer-gateway",
                      label:  "Hướng dẫn chỉnh sửa Customer gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/delete-customer-gateway",
                      label:  "Hướng dẫn xoá Customer gateway"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/permission-access-guide",
                      label:  "Hướng dẫn phân quyền sử dụng dịch vụ"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/setting-up-alerts-via-the-cloud-guard-service-guide",
                      label:  "Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/monitoring-service-through-logging-feature-guide",
                      label:  "Theo dõi dịch vụ thông qua tính năng logging"
                    },
                    {
                      type:  "doc",
                      id:  "vpn-site-to-site/monitoring-service-through-monitoring-feature-guide",
                      label:  "Monitoring"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "vpn-site-to-site/faq",
                  label:  "Câu hỏi thường gặp"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "Load Balancer",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Load Balancer (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Load Balancer",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/khoi-tao-load-balancer",
                      label:  "Khởi tạo Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/cap-nhat-load-balancer",
                      label:  "Update Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/theo-doi-bieu-do-load-balancer",
                      label:  "Theo dõi biểu đồ giám sát Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/them-external-member",
                      label:  "Thêm External member cho Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/resize-load-balancer",
                      label:  "Thay đổi gói Load Balancer (Resize)"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/access-logs",
                      label:  "Access Logs"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/integrate-with-fmon",
                      label:  "Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Listener",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/khoi-tao-listener",
                      label:  "Khởi tạo Listener"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/cau-hinh-timeout",
                      label:  "Cấu hình Timeout"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/chinh-sua-listener",
                      label:  "Cấu hình L7 policy cho Listener"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/redirect-http-request-sang-https",
                      label:  "Cấu hình redirect HTTP request sang HTTPS"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/redirect-prefix",
                      label:  "Redirect Prefix"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/enable-hsts-to-http-listener",
                      label:  "Enable HSTS to HTTPS Listener"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/Allow-IP-CIDR",
                      label:  "Cấu hình Allow IP/CIDR"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/SNI-load-balancer",
                      label:  "Cấu hình SNI trên Load balancer"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Server Pool",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/khoi-tao-server-pool",
                      label:  "Khởi tạo Server Pool"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/them-bot-member-cho-server-pool",
                      label:  "Thêm/bớt member cho Server pool"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/chinh-sua-cau-hinh-health-check",
                      label:  "Chỉnh sửa cấu hình Health check"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý SSL Certificate",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/quan-ly-ssl-certificate",
                      label:  "Quan Ly Ssl Certificate"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/import-ssl-certificate-cho-load-balancer",
                      label:  "Import ssl Certificate cho Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xoa-ssl-certificate",
                      label:  "Xoá SSL Certificate"
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
                  label:  "Quản lý Load Balancer",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/khoi tao mot load balancer moi",
                      label:  "Khởi tạo một Load Balancer mới"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/them may ao vao load balancer",
                      label:  "Thêm máy ảo vào Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xoa may ao khoi load balancer",
                      label:  "Xóa máy ảo khỏi Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/thay doi thong tin cau hinh load balancer",
                      label:  "Thay đổi thông tin cấu hình Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xoa load balancer",
                      label:  "Xóa Load Balancer"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý chứng chỉ SSL cho Load Balancer",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "load-balancer/tao import ssl certificate",
                      label:  "Tạo/Import SSL Certificate"
                    },
                    {
                      type:  "doc",
                      id:  "load-balancer/xem thong tin chi tiet ssl certificate",
                      label:  "Xem thông tin chi tiết SSL Certificate"
                    }
                  ]
                }
              ]
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "create-vpc/create-vpc",
                  label:  "Tạo VPC"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/rename-vpc-en",
                  label:  "Đổi tên VPC"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/view-activity-en",
                  label:  "Xem Activity log và trạng thái tác vụ"
                },
                {
                  type:  "doc",
                  id:  "create-vpc/create-vpc-en",
                  label:  "Khởi tạo VPC"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Kubernetes Cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/quan-ly-kubernetes-cluster",
                      label:  "Quản lý Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/khoi-tạo-kubernetes-cluster-moi",
                      label:  "Khởi tạo Kubernetes Cluster mới"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/list-created-cluster",
                      label:  "Xem danh sách Kubernetes Cluster đã tạo"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster",
                      label:  "Truy cập thông tin chi tiết của Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/lay-thong-tin-truy-cap-cluster",
                      label:  "Lấy thông tin truy cập Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-rotate-kubeconfig",
                      label:  "Tính năng Rotate Kubeconfig"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/xoa-kubernetes-cluster",
                      label:  "Xoa Kubernetes Cluster"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Thay đổi cấu hình K8s Cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-k8s-cluster",
                      label:  "Thay đổi cấu hình K8s cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cluster-endponit-access",
                      label:  "Thay đổi Cluster Endpoint Access"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/them-worker-group",
                      label:  "Thêm Worker Group"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-internal-subnet-load-balancer",
                      label:  "Thay đổi cấu hình Internal subnet Load Balancer (CIDR)"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group",
                      label:  "Chỉnh sửa label/taint cho..."
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/bat-tat-node-auto-repair",
                      label:  "Bật/Tắt Node Auto-repair"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chuyen-worker-group-base",
                      label:  "Tính năng chuyển worker group base"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/nang-cap-k8s-version",
                      label:  "Nâng cấp phiên bản Kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cluster-autoscale",
                      label:  "Bật tính năng Cluster Autoscale"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool",
                  label:  "Triển khai ứng dụng trên worker pool"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/scale-in-chi-dinh-node",
                  label:  "Tính năng scale in chỉ định node trong cluster"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/service-type-load-balancer",
                  label:  "Service Type Load-Balancer"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/persistent-storage",
                  label:  "Persistent Storage"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup",
                  label:  "Tính năng Hibernate & Wake-up"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/tinh-nang-dat-lich-hibernate-wake-up",
                  label:  "Tính năng Đặt lịch Hibernate & Wake-up"
                },
                {
                  type:  "category",
                  label:  "Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version)",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tu-dong-nang-cap-version",
                      label:  "Tự động nâng cấp phiên bản"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gioi-thieu-chung-ve-quy-trinh-quan-ly-version",
                      label:  "Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade",
                      label:  "Hướng dẫn chi tiết sử dụng tính năng auto upgrade version"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/fpt-cloud-managed-kubernetes-release-calendar",
                  label:  "Lịch phát hành FPT Cloud Managed Kubernetes"
                },
                {
                  type:  "category",
                  label:  "Tính năng tăng cường bảo mật cho dịch vụ MFKE",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-tang-cuong-bao-mat-mfke",
                      label:  "Tính năng tăng cường bảo mật cho M-FKE"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-benchmark-cluster",
                      label:  "Tính năng Benchmark Managed Kubernetes Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-runtime-security-cluster",
                      label:  "Tính năng Runtime Security cho Managed Kubernetes Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-workload-scan",
                      label:  "Tính năng Workload Managed Kubernetes Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/audit-log-vn",
                      label:  "Giới thiệu chung tính năng Audit Logs Security"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/danh-tag-cho-vm",
                  label:  "Tính năng đánh Tag cho Virtual Machine"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/backup-restore-vn",
                  label:  "Tính năng Backup & Restore"
                }
              ]
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-m-fke",
              label:  "Các lưu ý khi sử dụng M-FKE"
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/mfke-faqs",
              label:  "Câu hỏi thường gặp"
            },
            {
              type:  "category",
              label:  "Một số gợi ý mẫu (Samples)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/microservices-architecture-on-fke",
                  label:  "Microservices Architecture on FKE"
                },
                {
                  type:  "category",
                  label:  "GPU là gì?",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-la-gi",
                      label:  "GPU là gì?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-cloud",
                      label:  "Tại sao nên sử dụng GPU trên Cloud?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-kubernetes",
                      label:  "Tại sao nên sử dụng GPU Kubernetes?"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-sharing",
                      label:  "Tính năng GPU Sharing"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/dich-vu-gpu-tren-k8s",
                      label:  "Dịch vụ GPU trên K8s FPT Cloud"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service",
                  label:  "Điều chỉnh cấu hình CoreDNS trong Kubernetes Service"
                },
                {
                  type:  "category",
                  label:  "Snapshot và restore persistent volume trong Kubernetes",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-và-restore-pvc-trên-k8s-fpt",
                      label:  "Snapshot và restore PVC"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s",
                      label:  "Tính năng snapshot Persistent Volume trên kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/restore-persistent-volume-tren-k8s",
                      label:  "Tính năng restore volume từ snapshot trên kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc",
                      label:  "Thực hiện đặt lịch Snapshot PVC trên Kubernetes"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot",
                      label:  "Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Cấu hình proxy protocol",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol",
                      label:  "Cấu hình proxy protocol"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-istio-ingress",
                      label:  "Cấu hình proxy protocol cho istio-ingress với Managed Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress",
                      label:  "Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/service-type-kb-layer7-lbv2",
                  label:  "Sử dụng service type Loadbalancer Layer 7 (LBv2)"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-flavor-cua-worker-pool",
                  label:  "Thay đổi cấu hình flavor của worker pool"
                }
              ]
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
              label:  "Tổng quan dịch vụ GPU trên Kubernetes FPT Cloud"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu",
              label:  "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/thay-doi-worker-group-su-sung-gpu",
              label:  "Thay đổi Worker Group sử dụng GPU"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes",
              label:  "Triển khai ứng dụng sử dụng GPU trên Kubernetes"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry",
              label:  "Hướng dẫn sử dụng GPU Telemetry"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu",
              label:  "Hướng dẫn sử dụng Autoscaler với GPU"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing",
              label:  "Hướng dẫn sử dụng các chế độ GPU sharing"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu",
              label:  "Tăng thêm Worker Group sử dụng GPU"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/driver-installation-self-install",
              label:  "Hướng dẫn cài đặt GPU Driver trên Kubernetes"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric",
              label:  "Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus",
              label:  "Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus"
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
              label:  "Kích hoạt dịch vụ FPT Container Registry",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kich-hoat-dich-vu-fpt-container-registry",
                  label:  "Kích hoạt dịch vụ Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kiem-tra-thong-tin-goi-dich-vu",
                  label:  "Kiểm tra thông tin gói dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/kich-hoat-dich-vu",
                  label:  "Kích hoạt dịch vụ"
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn sử dụng trên Docker CLI",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-su-dung-tren-docker-cli",
                  label:  "Sử dụng Docker CLI"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/docker-login",
                  label:  "Docker Login"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tag-va-push-image-len-fpt-container-registry",
                  label:  "Tag và push image"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/pull-docker-image-tu-fpt-container-registry-ve-local",
                  label:  "Pull Docker image về local"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Repositories trên FPT Portal",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-repositories-tren-fpt-portal",
                  label:  "Quản lý repositories"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xem-danh-sach-repositories",
                  label:  "Xem danh sách repositories"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xoa-image-hoac-artifact-trong-repositories",
                  label:  "Xóa image hoặc artifact"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Retention Rule",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-retention-rule",
                  label:  "Quản lý retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/them-moi-tag-retention-rule",
                  label:  "Thêm mới tag retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-tag-retention-rule",
                  label:  "Quản lý tag retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cau-hinh-lap-lich-chay-retention-rule",
                  label:  "Cấu hình lịch chạy retention rule"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-retention-run",
                  label:  "Quản lý retention run"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Robot Account",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-robot-account",
                  label:  "Quản lý robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tao-moi-robot-account",
                  label:  "Tạo mới robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xem-danh-sach-robot-account",
                  label:  "Xem danh sách robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cap-nhat-robot-account",
                  label:  "Cập nhật robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/disable-robot-account-dang-su-dung",
                  label:  "Tắt robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/enable-robot-account",
                  label:  "Bật lại robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/xoa-mot-robot-account",
                  label:  "Xóa robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/refresh-robot-account",
                  label:  "Refresh robot account"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-su-dung-robot-account",
                  label:  "Sử dụng robot account"
                }
              ]
            },
            {
              type:  "category",
              label:  "Quản lý Gói dịch vụ",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-goi-dich-vu",
                  label:  "Quản lý gói dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/cem-chi-tiet-quota-dich-vu",
                  label:  "Xem chi tiết quota"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/huong-dan-nang-goi-dich-vu-dang-su-dung",
                  label:  "Nâng gói dịch vụ"
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
                  label:  "Thực hiện scan image"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/stop-scan",
                  label:  "Dừng scan"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/quan-ly-ket-qua-scan-images",
                  label:  "Quản lý kết quả scan"
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
              id:  "dedicated-fpt-kubernetes-engine/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Kubernetes cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/quan-ly-kubernetes-cluster",
                      label:  "Quản lý Kubernetes cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/create-new-k8s-cluster",
                      label:  "Khởi tạo Kubernetes cluster mới"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/list-created-clusters",
                      label:  "Xem danh sách Kubernetes Cluster đã tạo"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/access-clusters-detail-information",
                      label:  "Truy cập thông tin chi tiết của Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/get-cluster-access-information",
                      label:  "Lấy thông tin truy cập Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/delete-k8s-cluster",
                      label:  "Xoa Kubernetes Cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/stop-k8s-cluster",
                      label:  "Bạn có thể tắt các Cluster đang hoạt động theo hướng dẫn sau:"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/start-k8s-cluster",
                      label:  "Với các Cluster đã tắt trước đó, bạn có thể bật lại theo hướng dẫn sau:"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Thay đổi cấu hình K8s Cluster",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/thay-doi-cau-hinh-k8s-cluster",
                      label:  "Thay đổi cấu hình K8s cluster"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/scale-worker-nodes",
                      label:  "Scale Worker Nodes"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/change-nodes-configuration",
                      label:  "Thay đổi Flavor (cấu hình) Nodes"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/change-nfs-server-configuration",
                      label:  "Thay đổi Flavor (cấu hình) NFS Server"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nodes",
                      label:  "Tăng Storage size của các Nodes"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nfs-server",
                      label:  "Tăng Storage size của NFS Server"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/nang-cap-k8s-version",
                      label:  "Nâng cấp K8s version"
                    },
                    {
                      type:  "doc",
                      id:  "dedicated-fpt-kubernetes-engine/add-nfs-storage",
                      label:  "Thêm NFS Persistent Storage"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/auto-scale",
                  label:  "Autoscale"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/manual-scale",
                  label:  "Để config Manual Scale, khách hàng cần thao tác như sau:"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/best-practice-manual-scaling",
                  label:  "Chi tiết quá trình manual scale in của hệ thống:"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/persistent-storage",
                  label:  "FKE cung cấp cho người sử dụng 02 loại Persistent Storage."
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/service-type-load-balancer",
                  label:  "Service Type Load-Balancer"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/advanced-firewall",
                  label:  "1. Tổng quan sản phẩm Kubenetes tích hợp Firewall"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/backup-restore-cluster",
                  label:  "Backup and Restore Cluster"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version",
                  label:  "Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console."
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/auto-repair-nodes",
                  label:  "A. Tổng quan"
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
              label:  "Các lưu ý khi sử dụng FKE"
            },
            {
              type:  "category",
              label:  "Các câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/dfke-faqs",
                  label:  "Câu hỏi thường gặp"
                }
              ]
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
              id:  "iam/Initial Setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Role",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/role-management",
                      label:  "Quản lý Role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/role-overview",
                      label:  "Tổng quan Role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-role-list",
                      label:  "Xem danh sách role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-role",
                      label:  "Khởi tạo role và phân quyền cho role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-role-detail",
                      label:  "Xem chi tiết role"
                    },
                    {
                      type:  "doc",
                      id:  "iam/edit-role-and-permissions",
                      label:  "Chỉnh sửa role và permission"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-role",
                      label:  "Xóa role"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý User Group",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/overview-user-group",
                      label:  "Tổng quan User Group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-user-group",
                      label:  "Khởi tạo User Group mới"
                    },
                    {
                      type:  "doc",
                      id:  "iam/view-detail-user-group",
                      label:  "Xem chi tiết User Group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/edit-user-group",
                      label:  "Chỉnh sửa User Group"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-user-group",
                      label:  "Xóa User Group"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý IAM User",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "iam/overview-iam-user",
                      label:  "Tổng quan IAM User"
                    },
                    {
                      type:  "doc",
                      id:  "iam/invite-iam-user",
                      label:  "Invite IAM user mới"
                    },
                    {
                      type:  "doc",
                      id:  "iam/create-account-access-vpc",
                      label:  "Khởi tạo account và truy cập VPC đã được mời"
                    },
                    {
                      type:  "doc",
                      id:  "iam/change-password",
                      label:  "Thay đổi mật khẩu"
                    },
                    {
                      type:  "doc",
                      id:  "iam/configure-2fa",
                      label:  "Cấu hình 2FA"
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
                      id:  "iam/ip-access",
                      label:  "IP Access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/overview-ip-access",
                      label:  "Tổng quan IP Access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/delete-ip-access",
                      label:  "Xóa record IP access"
                    },
                    {
                      type:  "doc",
                      id:  "iam/ip-access-activity-log",
                      label:  "Kiểm tra activity logs"
                    },
                    {
                      type:  "doc",
                      id:  "iam/download-access-log",
                      label:  "Tải danh sách lịch sử truy cập"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "iam/iam",
                  label:  "Tổng quan"
                },
                {
                  type:  "doc",
                  id:  "iam/view-list-user-group",
                  label:  "Xem danh sách User Group"
                },
                {
                  type:  "doc",
                  id:  "iam/create-ip-access",
                  label:  "Khởi tạo record IP access mới"
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
                  label:  "Tổng quan"
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
                  label:  "Thống kê trạng thái của LB đích tương ứng với từng proxy được thiết lập"
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
                      label:  "Lưu trữ và hiển thị các cấu hình SSL, có thể thêm bằng cách chọn vào dấu"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters",
                      label:  "Sử dụng để cấu hình network (tương tự security group)"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters-scheduling",
                      label:  "Sử dụng thiết lập thời gian thực hiện các security group trong network filter"
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
                      label:  "Bao gồm các chức năng"
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
                  type:  "doc",
                  id:  "fpt-cloud-wapples/privacy-filtering",
                  label:  "Privacy Filtering"
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
                  label:  "Quản trị các cảnh báo về các trạng thái hệ thống và trạng thái mạng"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/backup-restore",
                  label:  "Backup Restore"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/intergration",
                  label:  "Các thông tin cấu hình tích hợp với 3rd party"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/network",
                  label:  "Các phương thức quản trị mạng truy cập inbound và outbound của Wapple"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/system",
                  label:  "System"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/fpt-cloud-wapples",
                  label:  "Fpt Cloud Wapples"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/configure-waf-server-connection",
              label:  "Cấu hình kết nối máy chủ WAF"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/tutorials-create-a-new-waf-server",
                  label:  "Thêm mới máy chủ WAF"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/update-information-of-the-WAF-server",
                  label:  "Chỉnh sửa máy chủ WAF"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/delete-waf-server",
                  label:  "Xóa máy chủ WAF"
                },
                {
                  type:  "category",
                  label:  "Quản trị máy chủ WAF với WAF Dashboard",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/tutorials-log-in-to-waf-dashboard",
                      label:  "Đăng nhập WAF Dashboard"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/monitor-waf-server-with-dashboard-overview",
                      label:  "Theo dõi WAF qua Dashboard Overview"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Proxy Host",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/quan-ly-proxy-host",
                      label:  "Quản lý proxy host"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/create-proxy-host",
                      label:  "Tạo mới proxy host"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/view-proxy-host-detail",
                      label:  "Xem chi tiết proxy host"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/update-proxy-host",
                      label:  "Cập nhật proxy host"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/enable-disable-proxy-host",
                      label:  "Bật/tắt proxy host"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-waf/delete-proxy-host",
                      label:  "Xóa proxy host"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-redirection-host",
                  label:  "Quản lý redirection host"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-stream-host",
                  label:  "Thêm mới stream host"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-404-host",
                  label:  "Quản lý 404 host"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-access-list",
                  label:  "Quản lý access list"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-ssl-certificate",
                  label:  "Quản lý SSL certificate"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-security-rule-set",
                  label:  "Quản lý security rule set"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/quan-ly-nguoi-dung-cua-waf-dashboard",
                  label:  "Quản lý người dùng WAF Dashboard"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/fpt-cloud-waf",
                  label:  "FPT Cloud WAF"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-waf/manage-proxy-host",
                  label:  "Manage Proxy Host"
                }
              ]
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Target",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/quan-ly-target",
                      label:  "Quản lý Target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/tao-target",
                      label:  "1. Tạo một Target mới"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/kiem-tra-trang-thai-target",
                      label:  "2 Kiểm tra trạng thái scan của Target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/update-target",
                      label:  "3 Chỉnh sửa cấu hình scan Target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/scan-now",
                      label:  "Scan now"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xoa-target",
                      label:  "5 Xóa Target"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-header",
                      label:  "6 Hướng dẫn lấy Header trang web khi tạo mục tiêu quét"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-cookie",
                      label:  "7 Hướng dẫn lấy Cookie trang web khi tạo mục tiêu quét"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/mo-remote-registry-window",
                      label:  "8. Mở Remote Registry trên Windows để sử dụng SMB"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Xem kết quả quét",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet",
                      label:  "Xem kết quả quét"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/dashboard-ket-qua-quet",
                      label:  "1. Truy cập Dashboard kết quả quét"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-chi-tiet-ket-qua-quet",
                      label:  "2. Xem chi tiết kết quả quét"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet-cu",
                      label:  "3. Xem kết quả lịch sử quét"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-va/xuat-bao-cao",
                  label:  "Xuất báo cáo"
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
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/truy-cap-giao-dien-quan-tri",
                  label:  "Truy cập giao diện quản trị"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-network-interfaces",
                  label:  "Cấu hình Network Interfaces"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-static-routes",
                  label:  "Cấu hình Static Routes"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-firewall-policy",
                  label:  "Tạo Firewall Policy"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/xoa-firewall-policy",
                  label:  "Xóa Firewall Policy"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-security-profile",
                  label:  "Tạo Security Profile"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/quan-ly-system-user-user-profile",
                  label:  "Quản Lý System User – User Profile"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/feature-visibility",
                  label:  "Tắt bật các Feature có trên Fortigate NGFW. System > Feature Visibility"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/hien-thi-logs-traffic",
                  label:  "Hiển thị Logs Traffic"
                }
              ]
            },
            {
              type:  "category",
              label:  "Các câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/FAQ",
                  label:  "Câu hỏi thường gặp"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "ddos-protection/create-ddos",
                  label:  "Khởi tạo DDoS Protection"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/monitor-ip",
                  label:  "Giám sát IP được bảo vệ"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/ddos-protection",
                  label:  "Bảo vệ DDoS"
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
              label:  "Hướng dẫn trên Gaia Portal",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-gaia-portal",
                  label:  "Truy cập Gaia Portal"
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
                  label:  "Cấu hình DNS"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/update-hotfix",
                  label:  "Lưu ý: Hệ thống sẽ reboot sau khi update."
                }
              ]
            },
            {
              type:  "category",
              label:  "Hướng dẫn trên SmartConsole",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-smartconsole",
                  label:  "Truy cập SmartConsole"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/install-policy",
                  label:  "Lưu ý:"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-object",
                  label:  "Tạo Object"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-firewall",
                  label:  "Tạo rule Firewall"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-nat",
                  label:  "Tạo rule NAT"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/dieu-tra-log",
                  label:  "Điều tra Log"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-blades",
                  label:  "Quản lý Blades"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-account",
                  label:  "Quản lý Account"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/checkpoint-fpt-ngfw",
                  label:  "Tổng quan"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
              label:  "Tao Tai Khoan Fpt Cloud Va Dang Nhap Vao Fpt Portal"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/gioi-thieu-chung",
              label:  "Gioi Thieu Chung"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/truy-cap-tinh-nang",
              label:  "Truy Cap Tinh Nang"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quan-li-danh-sach-whitelisted-ip",
              label:  "Quan Li Danh Sach..."
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip",
              label:  "Mỗi endpoint (Dashboard, Metric, Log, Trace) có bảng IP riêng."
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/them-moi-whitelisted-ip",
              label:  "Click nút 'Whitelist IP/Range' trên bảng tương ứng."
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xoa-whitelisted-ip",
              label:  "thành công"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/retry-ip",
              label:  "Áp dụng cho các IP có trạng thái 'Whitelist Failed'/'Blacklist Failed'."
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quy-tac-he-thong",
              label:  "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/lien-he-ho-tro",
              label:  "Lien He Ho Tro"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "reporting/tich-hop-dich-vu",
                  label:  "Tích hợp dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "reporting/tao-report",
                  label:  "Tạo report"
                },
                {
                  type:  "doc",
                  id:  "reporting/test-send-email",
                  label:  "Test send email"
                },
                {
                  type:  "doc",
                  id:  "reporting/view-detail",
                  label:  "Xem chi tiết report"
                },
                {
                  type:  "doc",
                  id:  "reporting/edit-report",
                  label:  "Sửa report"
                },
                {
                  type:  "doc",
                  id:  "reporting/delete-report",
                  label:  "Xóa report"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/kich-hoat-dich-vu-fcmon",
                  label:  "1. Kích hoạch dịch vụ FPT Cloud Monitoring"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/xem-danh-sach-workspaces",
                  label:  "2. Xem danh sách Workspaces"
                },
                {
                  type:  "category",
                  label:  "3. Quản lý một Workspace",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/quan-ly-workspace",
                      label:  "Quản lý một Workspace"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/xem-chi-tiet-workspace",
                      label:  "3.1. Xem chi tiết một Workspace"
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
                      label:  "Quản lý thông tin package và resource quota Khách hàng đang sử dụng."
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-infrastructure-platform",
                  label:  "Monitor Infrastructure Platform"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-applications",
                  label:  "Monitor Applications"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-public-endpoints",
                  label:  "Chú ý:"
                },
                {
                  type:  "category",
                  label:  "7. Trực quan hóa dữ liệu",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truc-quan-hoa-du-lieu",
                      label:  "Trực quan hóa dữ liệu"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truy-cap-vao-dashboard",
                      label:  "7.1. Truy cập vào dashboard"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/fcmon-dashboard-template",
                      label:  "7.2.1. Cài đặt dashboard template"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/alerting",
                  label:  "8. Quản trị Cảnh báo (Alerting)"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/explore-data",
                  label:  "9. Khám phá dữ liệu (Explore data)"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/quan-tri-user",
                  label:  "10. Quản trị User"
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
                  label:  "Tổng quan"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/khoi-tao-workspace",
                  label:  "Khởi tạo Workspace"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/truy-cap-grafana",
                  label:  "Truy cập Grafana"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-template",
                  label:  "Tích hợp Template"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-dashboard-template",
                  label:  "Tích hợp Dashboard"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-alert-rule-template",
                  label:  "Tích hợp Alert Rule"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-kubernetes",
                  label:  "Monitoring K8S"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s",
                  label:  "Tích hợp K8s"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-metric",
                  label:  "Xem thông tin Metric"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-logs",
                  label:  "Xem thông tin Logs"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-trace",
                  label:  "Xem thông tin Trace"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/query-metric-data",
                  label:  "Hướng dẫn cách tự xây dựng truy vấn metric data trong Grafana."
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-database",
                  label:  "Monitoring Database"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-database",
                  label:  "Tích hợp Database"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-monitor",
                  label:  "Xem thông tin Monitor"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/alerting",
                  label:  "8. Quản trị Cảnh báo (Alerting)"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tao-alert-rule",
                  label:  "Tạo Alert Rule"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/contact-point",
                  label:  "1. Cách thiết lập Telegram bot"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/usage",
                  label:  "Kiểm tra sử dụng"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/cau-hoi-thuong-gap",
                  label:  "Câu hỏi thường gặp"
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
              label:  "Tổng quan"
            },
            {
              type:  "doc",
              id:  "cloud-guard/Initial-Setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý Alert",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-virtual-machine",
                      label:  "Khởi tạo cảnh báo cho Virtual Machine (VM)"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-object-storage",
                      label:  "Khởi tạo cảnh báo cho Object Storage"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-load-balancer",
                      label:  "Khởi tạo cảnh báo cho Load Balancer"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-vpn",
                      label:  "Create an alert for VPN site-to-site"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-activity-alert",
                      label:  "Khởi tạo một Activity Alert mới"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-threat-alert",
                      label:  "Khởi tạo một Threat Alert mới"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/kiem-tra-trang-thai-cua-alert",
                      label:  "Kiểm tra trạng thái của Alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/bat-tat-alert",
                      label:  "Bật/Tắt Alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-alert",
                      label:  "Chỉnh sửa Alert"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-alert",
                      label:  "Xóa Alert"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Recipient",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/Recipient-la-gi",
                      label:  "Recipient là gì?"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/tao-moi-recipient",
                      label:  "Tạo mới Recipient"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/recipient-teams",
                      label:  "Tạo mới người nhận qua MSTeams"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-recipient",
                      label:  "Chỉnh sửa Recipient"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-recipient",
                      label:  "Xóa Recipient"
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
                  id:  "cloud-advisor/cloud-advisor",
                  label:  "Cloud Advisor"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-introduction",
                  label:  "Giới thiệu"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-dashboard",
                  label:  "Phân loại theo nhóm"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-security",
                  label:  "Các vấn đề bảo mật"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-cost-optimization",
                  label:  "Các vấn đề tối ưu hóa chi phí"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-fault-tolerance",
                  label:  "Fault tolerance"
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
              id:  "incident-management/incident-management",
              label:  "Quản lý sự cố"
            },
            {
              type:  "doc",
              id:  "incident-management/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "incident-management/configure-integrations",
              label:  "Cấu hình integrations"
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
              label:  "Outgoing webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/atlassian-jira",
              label:  "Atlassian Jira"
            },
            {
              type:  "doc",
              id:  "incident-management/slack",
              label:  "Slack"
            },
            {
              type:  "doc",
              id:  "incident-management/telegram",
              label:  "Telegram"
            },
            {
              type:  "doc",
              id:  "incident-management/microsoft-teams",
              label:  "Microsoft Teams"
            },
            {
              type:  "doc",
              id:  "incident-management/cau-hinh-settings",
              label:  "Cấu hình settings"
            },
            {
              type:  "doc",
              id:  "incident-management/create-incident",
              label:  "Create Incident"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-label",
              label:  "Incident label"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-management-overview",
              label:  "Incident Management"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-severity",
              label:  "Incident severity"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-status",
              label:  "Incident status"
            },
            {
              type:  "doc",
              id:  "incident-management/tao-incident",
              label:  "Tạo incident"
            },
            {
              type:  "doc",
              id:  "incident-management/declare-incident",
              label:  "Khai báo incident trực tiếp"
            },
            {
              type:  "doc",
              id:  "incident-management/create-incident-via-webhook",
              label:  "Tạo qua incoming webhook"
            },
            {
              type:  "doc",
              id:  "incident-management/manage-incidents",
              label:  "Manage Incidents"
            },
            {
              type:  "doc",
              id:  "incident-management/quan-tri-incident",
              label:  "Quản trị incident"
            },
            {
              type:  "doc",
              id:  "incident-management/filter-incidents",
              label:  "Tìm kiếm và lọc incidents"
            },
            {
              type:  "doc",
              id:  "incident-management/view-incident-detail",
              label:  "Xem chi tiết incident"
            },
            {
              type:  "doc",
              id:  "incident-management/post-incident-activity",
              label:  "Ghi lại hoạt động xử lý"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-status",
              label:  "Thay đổi trạng thái incident"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-severity",
              label:  "Thay đổi mức độ ảnh hưởng"
            },
            {
              type:  "doc",
              id:  "incident-management/copy-activities-as-markdown",
              label:  "Xuất activity log dạng markdown"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-data-visualization",
              label:  "Trực quan dữ liệu incident"
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
              label:  "Chi Tiết Dịch Vụ"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
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
                  label:  "Restore File and Folder for Linux"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-file-and-folder-for-windows",
                  label:  "Restore File and Folder for Windows"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-window-vm-from-cloud-repository",
                  label:  "Restore Window vm From Cloud Repository"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository",
                  label:  "Restore Linux vm From Cloud Repository"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/create-veeam-recovery-media",
                  label:  "Create Veeam Recovery Media"
                },
                {
                  type:  "doc",
                  id:  "fpt-backup-as-a-service/managing-alarms",
                  label:  "Managing Alarms"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/quan-ly-backup-job",
                  label:  "Quản lý Backup job"
                },
                {
                  type:  "doc",
                  id:  "backup/restore-lai-vm-tu-cac-restore-point",
                  label:  "Restore lại VM từ các Restore Point"
                },
                {
                  type:  "doc",
                  id:  "backup/clone-vm-tu-cac-restore-point",
                  label:  "Tạo VM mới từ các Restore Point"
                },
                {
                  type:  "doc",
                  id:  "backup/xem-lich-su-backup-and-recovery",
                  label:  "Xem lịch sử Backup & Recovery"
                },
                {
                  type:  "doc",
                  id:  "backup/kiem-tra-thong-tin-backup-va-restore-cua-vm",
                  label:  "Kiểm tra thông tin backup và restore của VM."
                },
                {
                  type:  "doc",
                  id:  "backup/backup-report",
                  label:  "Backup Report"
                },
                {
                  type:  "doc",
                  id:  "backup/backup-volume",
                  label:  "1. Giới thiệu"
                }
              ]
            },
            {
              type:  "category",
              label:  "Các câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud",
                  label:  "Tôi được hỗ trợ những gì khi thuê máy chủ và dùng dịch vụ Backup trên FPT Cloud?"
                },
                {
                  type:  "doc",
                  id:  "backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung",
                  label:  "Incremental backup là gì và lợi ích khi sử dụng?"
                },
                {
                  type:  "doc",
                  id:  "backup/tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao",
                  label:  "Tai Sao Djoi Luc Toi Thay So Luong Restore Point Tren He Thong Nhieu Hon So Luong Lastest Backup To Keep Dja Khai Bao"
                },
                {
                  type:  "doc",
                  id:  "backup/toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong",
                  label:  "Tôi muốn tìm hiểu về Backup, FPT Cloud có chính sách dùng thử không?"
                },
                {
                  type:  "doc",
                  id:  "backup/backup",
                  label:  "Sao lưu"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-key-vault/tutorials-khoi-tao-vault-instance",
                  label:  "Khởi tạo Vault Instance"
                },
                {
                  type:  "category",
                  label:  "Quản lý Secret Engine",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-secret-engine",
                      label:  "Tạo Secret Engine"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-secret-engine",
                      label:  "Xóa Secret Engine"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Secret",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-secret-tren-secret-engine",
                      label:  "Tạo Secret trên Secret Engine"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-secret",
                      label:  "Xóa Secret"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Policy",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-policy",
                      label:  "Tạo Policy"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-xoa-policy",
                      label:  "Xóa Policy"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Auth Method",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-auth-method",
                      label:  "Tạo Auth Method"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-key-vault/tutorials-tao-role",
                      label:  "Tạo Role"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/kiem-tra-thong-tin-goi-dich-vu",
                  label:  "Kiểm tra thông tin gói dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/tao-moi-fpt-jenkinsCI",
                  label:  "Tạo mới một FPT Jenkins CI"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xem-thong-tin-chi-tiet-jenkins-CI-instance",
                  label:  "Xem thông tin chi tiết Jenkins CI instance"
                },
                {
                  type:  "category",
                  label:  "Quản lý FPT Cloud Agent",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-fpt-cloud-agent",
                      label:  "Quản lý FPT Cloud Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-agent",
                      label:  "Thêm mới một Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-thong-tin-cau-hinh-agent",
                      label:  "Cập nhật thông tin cấu hình Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-agent-khi-khong-muon-su-dung",
                      label:  "Xóa Agent khi không muốn sử dụng"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý Credential",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-credential",
                      label:  "Quản lý Credential"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-credential",
                      label:  "Thêm mới một Credential"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-mot-credential",
                      label:  "Cập nhật một credential"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-mot-credential",
                      label:  "Xóa một credential"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Quản lý cấu hình",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-email-notifications",
                      label:  "Cấu hình Email Notifications"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-sonarqube-servers",
                      label:  "Cấu hình SonarQube servers"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-telegram-bots",
                      label:  "Cấu hình Telegram Bots"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/upgrade-version",
                  label:  "Nâng cấp phiên bản cho cơ sở dữ liệu"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/nang-cap-goi-dich-vu",
                  label:  "Nâng cấp gói dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xoa-jenkins-instance-khi-khong-muon-su-dung",
                  label:  "Xóa Jenkins instance khi không muốn sử dụng"
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
                      label:  "Hướng dẫn đăng nhập vào FPT Cloud Jenkins CI"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent",
                      label:  "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins",
                      label:  "Hướng dẫn cấu hình Nodes Build trên Jenkins"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal",
                      label:  "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/fpt-jenkins-ci",
                  label:  "Fpt Jenkins Ci"
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
              id:  "fpt-argocd/Initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/check-service-package-info",
                  label:  "Kiểm tra thông tin gói dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/create-fpt-argocd",
                  label:  "Tạo mới FPT ArgoCD instance"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/view-argocd-detail",
                  label:  "Xem thông tin và đăng nhập"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/add-cluster-to-argocd",
                  label:  "Kết nối cluster Kubernetes"
                },
                {
                  type:  "category",
                  label:  "Cấu hình Image Updater",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/cau-hinh-image-updater",
                      label:  "Cấu hình Image Updater"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-images-updater",
                      label:  "Enable/disable Image Updater"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/configure-log-level",
                      label:  "Cấu hình log level"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/manage-secrets",
                      label:  "Quản lý secret"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/manage-registry-secrets",
                      label:  "Quản lý registry secret"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/manage-container-registry",
                      label:  "Quản lý container registry"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Cấu hình webhook",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/cau-hinh-webhook",
                      label:  "Cấu hình webhook"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/add-webhook-secret",
                      label:  "Tạo mới webhook secret"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/edit-webhook-secret",
                      label:  "Cập nhật webhook secret"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/delete-webhook-secret",
                      label:  "Xóa webhook secret"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-build-options-kustomize",
                  label:  "Cấu hình Kustomize build options"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-timereconcile",
                  label:  "Cấu hình TimeReconcile"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-rbac",
                  label:  "Cấu hình RBAC policy"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-whitelist-ip",
                  label:  "Cấu hình whitelist IP"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/upgrade-service-package",
                  label:  "Nâng gói dịch vụ"
                },
                {
                  type:  "category",
                  label:  "Quản lý account trên argocd",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/quan-ly-account-tren-argocd",
                      label:  "Quản lý tài khoản ArgoCD"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/create-account",
                      label:  "Tạo mới tài khoản"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-account",
                      label:  "Enable/disable tài khoản"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/manage-admin-account",
                      label:  "Quản lý tài khoản admin"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/update-admin-password",
                      label:  "Cập nhật mật khẩu admin"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Manage Admin account, Enable/disable Anonymous User",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/manage-admin-account-enable-disable-anonymous-user",
                      label:  "Quản lý admin và anonymous user"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-anonymous-user",
                      label:  "Enable/disable anonymous user"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-admin-user",
                      label:  "Enable/disable tài khoản admin"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Cấu hình OIDC phục vụ SSO config",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/cau-hinh-oidc-phuc-vu-sso-config",
                      label:  "Cấu hình OIDC cho SSO"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-oidc",
                      label:  "Enable/disable OIDC"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/configure-oidc-config",
                      label:  "Cấu hình OIDC config"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/update-oidc-config",
                      label:  "Cập nhật cấu hình OIDC"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/delete-oidc-config",
                      label:  "Xóa cấu hình OIDC"
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
                  label:  "Cấu hình Notifications",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-argocd/cau-hinh-notifications",
                      label:  "Cấu hình notifications"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/enable-disable-notifications",
                      label:  "Enable/disable notifications"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/configure-notification-channels",
                      label:  "Cấu hình channel để thực hiện gửi thông báo"
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
                      label:  "Hướng dẫn đăng nhập vào ArgoCD"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes",
                      label:  "Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/configure-webhook-with-secret",
                      label:  "Thực hiện cấu hình Webhook với webhook secret đã được tạo"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options",
                      label:  "Hướng dẫn deploy một applications với kustomize sử dụng build options"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-deploy-applications-qua-helm-chart-repo",
                      label:  "Hướng dẫn deploy applications qua helm chart repo"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-deploy-applications-qua-argocd-cli",
                      label:  "Hướng dẫn deploy applications qua argocd cli"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-su-dung-applicationset-de-deploy",
                      label:  "Hướng dẫn sử dụng applicationset để deploy"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-cau-hinh-notifications-de-nhan-thong-bao",
                      label:  "Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-tich-hop-oidc-de-quan-ly-account",
                      label:  "Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-argocd/huong-dan-tich-hop-argocd-images-updater",
                      label:  "Hướng dẫn tích hợp Argo CD Images Updater"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-api-management/quick-starts",
              label:  "Hướng dẫn nhanh (Quick Starts)"
            },
            {
              type:  "category",
              label:  "Hướng dẫn chi tiết (Tutorials)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-api-management/registering-on-fpt-portal",
                  label:  "Đăng ký dịch vụ API Management trên FPT Portal"
                },
                {
                  type:  "category",
                  label:  "Khai báo thông tin trên ApiManager Application",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-api-management/khai-bao-thong-tin-tren-apimanager-application",
                      label:  "Khai báo thông tin trên ApiManager Application"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-api-management/manage-rest-apis",
                      label:  "Quản lý REST APIs"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-api-management/managing-products",
                      label:  "Quản lý Products"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-api-management/managing-sites",
                      label:  "Quản lý API Site"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-api-management/managing-consumers",
                      label:  "Quản lý Consumers"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/analytics",
                  label:  "Analytics"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/consumer-api-usage-guide",
                  label:  "Hướng dẫn sử dụng cho API Consumer"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/fpt-api-management",
                  label:  "FPT API Management"
                }
              ]
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/tao-api-gateway",
              label:  "Tạo API Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xem-thong-tin-api-gateway",
              label:  "Xem thông tin API Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xoa-api-gateway",
              label:  "Xóa API Gateway"
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
              label:  "FPT App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/create-a-new-fpt-app-catalogs",
              label:  "Tạo mới App Catalog"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-app-catalog-details",
              label:  "Xem thông tin chi tiết App Catalog"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/add-cluster-to-app-catalogs-management",
              label:  "Kết nối cluster tới App Catalog Management"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/quan-ly-app-catalogs",
              label:  "Quản lý App Catalogs"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/search-app-catalogs-from-a-repository",
              label:  "Tìm kiếm App Catalog trong repository"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/deploy-app-catalogs-to-cluster",
              label:  "Deploy App Catalog tới cluster"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/quan-ly-applications-da-duoc-deploy",
              label:  "Quản lý applications đã được deploy"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/filter-deployed-appplications-by-cluster",
              label:  "Filter apps đã deploy theo cluster"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-deployed-applications-details",
              label:  "Xem chi tiết app đã deploy"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/change-applications-configuration",
              label:  "Thay đổi cấu hình của applications"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/rollback-an-application-to-the-old-configuration",
              label:  "Rollback app về cấu hình cũ"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/upgrade-applications-to-the-latest-version",
              label:  "Upgrade applications tới version mới nhất"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/uninstall-applications",
              label:  "Uninstall applications"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/delete-an-app-catalogs-mangement",
              label:  "Xóa App Catalog Management"
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
              label:  "Fpt Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-event-gateway",
              label:  "Tao Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-event-gateway",
              label:  "Xem Thong tin Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-event-gateway",
              label:  "Cap Nhat Thong tin Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-event-gateway",
              label:  "Xoa Event Gateway"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-moi-security",
              label:  "Tao moi Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-security",
              label:  "Cap Nhat Thong tin Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-security",
              label:  "Xoa Security"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router-group",
              label:  "Tao Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-router-group",
              label:  "Xem Thong tin Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router-group",
              label:  "Cap Nhat Thong tin Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router-group",
              label:  "Xoa Router Group"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router",
              label:  "Tao Router"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router",
              label:  "Cap Nhat Thong tin Router"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router",
              label:  "Xoa Router"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/quick-starts",
              label:  "Bắt đầu nhanh"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-topics",
              label:  "Quản lý topic"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-topics",
              label:  "Tạo topic"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-topics",
              label:  "Xem topic"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-topics",
              label:  "Chỉnh sửa topic"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-topics",
              label:  "Xóa topic"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-credentials",
              label:  "Quản lý credential"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-credentials",
              label:  "Tạo credential"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-credentials",
              label:  "Chỉnh sửa credential"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-credentials",
              label:  "Xóa credential"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-acls",
              label:  "Quản lý ACL"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-acls",
              label:  "Tạo ACL"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-acls",
              label:  "Xóa ACL"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-consumer-groups",
              label:  "Quản lý consumer group"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-consumer-groups",
              label:  "Tạo consumer group"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-consumer-groups",
              label:  "Xem consumer group"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-consumer-groups",
              label:  "Xóa consumer group"
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
              label:  "FPT Message Bus for RabbitMQ"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/initial-setup",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Quick-Starts",
              label:  "Hướng dẫn nhanh"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/manage-queues",
              label:  "Quản lý queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/quan-ly-queues",
              label:  "Quản lý queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-queues",
              label:  "Create Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/tao-queues",
              label:  "Tạo queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/View-queues",
              label:  "View Queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xem-queues",
              label:  "Xem queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Send-Receive-messages-in-queues",
              label:  "Send and receive messages in queues"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/gui-nhan-message-trong-queues",
              label:  "Gửi và nhận messages trong queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xoa-queues",
              label:  "Xóa queue"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/manage-topics",
              label:  "Quản lý topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/quan-ly-topics",
              label:  "Quản lý topics"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-topics",
              label:  "Tạo topic"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-Subscriptions",
              label:  "Tạo subscription"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Edit-topics",
              label:  "Sửa topic"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Send-Receive-messages-in-topics",
              label:  "Gửi và nhận messages trong topic"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Delete-topics",
              label:  "Xóa topic"
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
              label:  "Thiết lập ban đầu (Initial Setup)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-database-engine/Initial-setup",
                  label:  "Thiết lập ban đầu"
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
              label:  "Hướng dẫn chi tiết",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Quản lý dịch vụ FPT Database Engine",
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
                  label:  "Khởi tạo và vận hành cơ sở dữ liệu",
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
                  id:  "managed-fpt-database-engine/db-proxy",
                  label:  "DB Proxy overview"
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
              label:  "Các câu hỏi thường gặp (FAQs)",
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
              label:  "Giới thiệu về FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/fde-glossary",
              label:  "Thuật ngữ chung về Cloud & DBaaS"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/database-engine-version",
              label:  "Version database engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-policy",
              label:  "Chính sách version"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-List",
              label:  "Danh mục version hỗ trợ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deployment-model",
              label:  "Mô hình triển khai"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/network-connectivity",
              label:  "Kết nối mạng và khả năng truy cập"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance",
              label:  "Bảo trì dịch vụ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Initial-setup",
              label:  "Yêu cầu thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/login-console",
              label:  "Truy cập FPT Console Portal"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/register-account",
              label:  "Đăng ký tài khoản FPT Console Portal"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/iam",
              label:  "Quyền truy cập dịch vụ FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/role-management",
              label:  "Quản lý Role"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/user-group-management",
              label:  "Quản lý User Group"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/subnet",
              label:  "Quản lý Subnet"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-engine-service",
              label:  "Quản lý dịch vụ FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/active-db-service",
              label:  "Kích hoạt dịch vụ FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deactive-db-service",
              label:  "Huỷ kích hoạt dịch vụ FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-manage-operate",
              label:  "Khởi tạo và vận hành cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/view-db-list",
              label:  "Xem danh sách cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/create-db",
              label:  "Khởi tạo cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-view-detail",
              label:  "Xem thông tin cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-connect",
              label:  "Kết nối cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-operation",
              label:  "Vận hành cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/upgrade-version",
              label:  "Nâng cấp phiên bản cho cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-restore",
              label:  "Các loại Backup"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-mgmt",
              label:  "Quản lý dịch vụ Backup"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-job-mgmt",
              label:  "Quản lý Job Backup"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/on-off-pitr",
              label:  "Bật/tắt PITR"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/restore-db",
              label:  "Khôi phục cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/push-s3",
              label:  "Đẩy dữ liệu backup lên S3"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/resource",
              label:  "Quản lý tài nguyên cụm cơ sở dữ liệu"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/parameter",
              label:  "Quản lý Parameter"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/kafka-user",
              label:  "Apache Kafka - Quản lý Kafka ACL"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-proxy",
              label:  "Quyền cần thiết:"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/vertical-scaling",
              label:  "Quyền cần thiết:"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance-window",
              label:  "Maintenance Window"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/notification",
              label:  "1. Cấu hình nhận thông báo từ FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/monitoring",
              label:  "Monitoring"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/log",
              label:  "Event Logs"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/reporting",
              label:  "Reporting"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-export",
              label:  "Xuất báo cáo thủ công (Report Export)"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-schedule",
              label:  "Lập lịch báo cáo tự động (Report Schedule)"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/benchmark-sysbench",
              label:  "Kết quả Benchmark Sysbench"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/mysql-troubleshooting",
              label:  "Danh mục lỗi"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Migration-cho-SQLServer",
              label:  "Migration cho SQL Server"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/clickhouse-use-ha",
              label:  "Q1. Điều gì xảy ra khi bật High Availability (HA) cho cụm ClickHouse?"
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
              id:  "trellix-customer-guide/Access the administration interface",
              label:  "Truy cập giao diện quản trị"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/setting-agert",
              label:  "Tạo gói cài đặt agent"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/client-task-mapping",
              label:  "Quản lý client tasks"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/report-guide",
              label:  "Xem báo cáo"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Viewing Logs",
              label:  "Xem nhật ký (log)"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/trellix-customer-guide",
              label:  "Trellix customer guide"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Create Agent Installation Package",
              label:  "Trellix Customer Guide"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "category",
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/create-request-resource",
                  label:  "Tạo một yêu cầu cung cấp tài nguyên"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/view-request-resource",
                  label:  "Xem các yêu cầu đã tạo"
                }
              ]
            },
            {
              type:  "category",
              label:  "Các câu hỏi thường gặp (FAQs)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-1",
                  label:  "Tôi có thể tạo nhiều yêu cầu cùng 1 lúc được không?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-2",
                  label:  "Làm thế nào để biết FCI đã nhận được yêu cầu của tôi?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-3",
                  label:  "Tôi có thể lựa chọn VPC hoặc tạo mới VPC khi yêu cầu dịch vụ không?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-4",
                  label:  "Vì sao tôi không tìm thấy phần Request Resource ở thành menu?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-5",
                  label:  "Vì sao tôi không thể chọn submit để gửi ticket?"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/end-user-request-resource",
                  label:  "Yêu cầu tài nguyên"
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
              label:  "IaC (Infrastructure as Code)"
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
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cost-explorer/View-dashboards-and-specific-costs-by-service",
                  label:  "Xem chi phí theo dịch vụ"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/customer-filter",
                  label:  "Xem chi phí theo loại tài nguyên"
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
                  id:  "cost-explorer/question-1",
                  label:  "Không xem được Cost Explorer"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/questions-2",
                  label:  "Lọc Cost Explorer theo resource cụ thể"
                },
                {
                  type:  "doc",
                  id:  "cost-explorer/cost-explorer",
                  label:  "Phân tích chi phí"
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
              id:  "budget-alert/initiating-a-budget-alert",
              label:  "Khởi tạo Budget Alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/view-cost-information",
              label:  "Xem thông tin chi phí và lịch sử cảnh báo"
            },
            {
              type:  "doc",
              id:  "budget-alert/pause-budget-alert",
              label:  "Tạm dừng cảnh báo Budget Alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/edit-budget-alert",
              label:  "Chỉnh sửa Budget Alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/delete-budget-alert",
              label:  "Xóa Budget Alert"
            },
            {
              type:  "doc",
              id:  "budget-alert/budget-alert",
              label:  "Cảnh báo ngân sách"
            },
            {
              type:  "doc",
              id:  "budget-alert/setting-budget-alert",
              label:  "Ngăn chặn tạo resource khi đạt ngưỡng"
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
              label:  "Hướng dẫn nhanh (Quick Starts)",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Xem đối soát theo kỳ hóa đơn",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "billing/view-bills",
                      label:  "Xem đối soát theo kỳ hóa đơn"
                    },
                    {
                      type:  "doc",
                      id:  "billing/view-bill-charges-by-service",
                      label:  "Xem đối soát theo tên dịch vụ (Charges by service)"
                    },
                    {
                      type:  "doc",
                      id:  "billing/view-bill-charges-by-resource",
                      label:  "Xem đối soát theo tài nguyên sử dụng (Charges by resource)"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "billing/download-bills",
                  label:  "Tải file đối soát chi tiết"
                },
                {
                  type:  "doc",
                  id:  "billing/billing-permission",
                  label:  "Phân quyền xem billing"
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
                  id:  "billing/question-1",
                  label:  "Vì sao tôi không xem được Bill?"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-2",
                  label:  "Với bill ở kỳ hóa đơn hiện tại, dữ liệu được cập nhật lần gần nhất là lúc nào?"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-3",
                  label:  "Vì sao tôi có nhiều đối soát trong cùng 1 kỳ hóa đơn?"
                },
                {
                  type:  "doc",
                  id:  "billing/billing",
                  label:  "Hóa đơn"
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
              label:  "1. Mô tả"
            },
            {
              type:  "doc",
              id:  "fpt-appsec/aspm_v1.2.1",
              label:  "1. Mô tả"
            }
          ]
        },
        {
          type:  "doc",
          id:  "fpt-appsec/initial-setup",
          label:  "Thiết lập ban đầu"
        },
        {
          type:  "category",
          label:  "Hướng dẫn chi tiết (Tutorial)",
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
                  label:  "Detail Dasboard"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-dashboard-overview",
                  label:  "Hướng dẫn đọc các số liệu Dashboard - Organization overview"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-issue-by-team",
                  label:  "Hướng dẫn đọc biểu đồ Issue by team"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-asset-by-team",
                  label:  "Hướng dẫn đọc biểu đồ Asset by team"
                }
              ]
            },
            {
              type:  "category",
              label:  "Organization Management - Quản lý Organization",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/gioi-thieu-Organization",
                  label:  "Organization Management - Quản lý Organization"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/chinh-sua-thong-tin-org",
                  label:  "Chỉnh sửa thông tin tổ chức"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-member",
                  label:  "Quản lý member"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-role",
                  label:  "Quản lý Roles"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-teams-org",
                  label:  "Quản lý Teams"
                }
              ]
            },
            {
              type:  "category",
              label:  "Team Management - Quản lý Team",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-team",
                  label:  "Team Management - Quản lý Team"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cai-dat-team",
                  label:  "Cài đặt Team"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-mem-team",
                  label:  "Quản lý Members"
                }
              ]
            },
            {
              type:  "category",
              label:  "Integration Management - Quản lý tích hợp",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-integration",
                  label:  "Integration Management - Quản lý tích hợp"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-github",
                  label:  "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlab",
                  label:  "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlabserver",
                  label:  "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-fcr",
                  label:  "5. Vô hiệu hoá tích hợp FPT Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-harbor",
                  label:  "1. Tạo Robot Account - Harbor"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cicd-guideline",
                  label:  "Guideline: Tích hợp Scanning API của FSP Core Service vào CI/CD Pipelines"
                }
              ]
            },
            {
              type:  "category",
              label:  "Workspace Management - Quản lý Asset và Issue",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-workspace",
                  label:  "Workspace Management - Quản lý Asset và Issue"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-scmasset",
                  label:  "2. Xem thông tin tổng quan của Assets"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-crasset",
                  label:  "Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-list",
                  label:  "Hướng dẫn thay đổi trạng thái issue tại màn Issue list"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-detail",
                  label:  "Hướng dẫn quản lý trạng thái issue tại màn Issue detail"
                }
              ]
            },
            {
              type:  "category",
              label:  "Schedule Management - Quản lý lịch chạy scan",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/create-schedule",
                  label:  "Hướng dẫn tạo schedule"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-detail",
                  label:  "Hướng dẫn xem danh sách & chi tiết schedule"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-edit",
                  label:  "Hướng dẫn chỉnh sửa schedule"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-delete",
                  label:  "Hướng dẫn xóa schedule"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-appsec/fpt-appsec",
              label:  "Fpt Appsec"
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
          label:  "Thiết lập ban đầu"
        },
        {
          type:  "category",
          label:  "Hướng dẫn chi tiết (Tutorials)",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Quản lý Managed GPU Cluster",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/khoi-tao-managed-gpu-cluster-moi",
                  label:  "Lưu ý :"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xem-danh-sach-managed-gpu-cluster",
                  label:  "Xem Danh Sach Managed..."
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/lay-thong-tin-truy-cap-cluster",
                  label:  "Lấy thông tin truy cập Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xoa-managed-gpu-cluster",
                  label:  "Xoa Managed gpu Cluster"
                }
              ]
            },
            {
              type:  "category",
              label:  "Thay đổi cấu hình K8S Cluster",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/thay-doi-cau-hinh-k8s",
                  label:  "Thay đổi cấu hình K8s"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/add-them-worker-group",
                  label:  "Add Them Worker Group"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-manual-scale-managed-gpu-cluster",
                  label:  "Tinh Nang Manual Scale Managed gpu Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster",
                  label:  "Chinh sua Label Taint cho Worker Group Managed gpu Cluster"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-chuyen-worker-base-managed-gpu-cluster",
                  label:  "Tinh Nang Chuyen Worker..."
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/service-load-balancer-managed-gpu-cluster",
              label:  "Service Load Balancer Managed..."
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster",
              label:  "Trien Khai Ung Dung..."
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/file-storage-high-performance",
              label:  "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/slurm-on-fpt-cloud",
              label:  "Slurm On Fpt Cloud"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/vgpu-for-container",
              label:  "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/gpu-time-sharing",
              label:  "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/mps-gpu-sharing",
              label:  "Mps Gpu Sharing"
            },
            {
              type:  "category",
              label:  "Triển khai workload GPU mẫu lên Managed GPU Cluster",
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
                  label:  "Chuẩn bị môi trường"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-gpus-example",
                  label:  "Chuẩn bị môi trường"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-nodes-example",
                  label:  "vLLM và multi-host serving"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/finetune-llm-models",
                  label:  "Chuẩn bị môi trường"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/fpt-managed-gpu-cluster",
              label:  "Fpt Managed Gpu Cluster"
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
              label:  "Tổng quan"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/quick-start",
              label:  "Bắt đầu nhanh"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/balance",
              label:  "Số dư"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/how-to-create-an-user-token",
              label:  "How To Create An..."
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/low-balance-threshold-alert",
              label:  "Cảnh báo số dư thấp"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/credit-history",
              label:  "Lịch sử credits"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/voucher-list",
              label:  "Danh sách voucher"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-methods",
              label:  "Phương thức thanh toán"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-calculation",
              label:  "Tính toán billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/gpu-container-billing",
              label:  "Billing GPU Container"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-hub-billing",
              label:  "Billing Model Hub"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-finetuning-billing",
              label:  "Billing Model Fine-Tuning"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/modas-billing",
              label:  "Billing MoDaS"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/add-credits",
              label:  "Nạp credits"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/redeem-voucher",
              label:  "Đổi voucher"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-invoice",
              label:  "Hóa đơn thanh toán"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-plan",
              label:  "Gói billing"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-faq",
              label:  "Câu hỏi thường gặp"
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
              label:  "Giới thiệu AI Notebooks"
            },
            {
              type:  "doc",
              id:  "ai-notebook/get-started-jp",
              label:  "Giới thiệu AI Notebooks"
            },
            {
              type:  "doc",
              id:  "ai-notebook/quick-start-jp",
              label:  "Hướng dẫn nhanh"
            },
            {
              type:  "doc",
              id:  "ai-notebook/quick-start",
              label:  "Hướng dẫn nhanh"
            },
            {
              type:  "doc",
              id:  "ai-notebook/lauch-jp",
              label:  "Khởi chạy AI Notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/launch-ai-notebook",
              label:  "Khởi chạy AI Notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/create-jp",
              label:  "Tạo notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/create-notebook",
              label:  "Tạo notebook"
            },
            {
              type:  "doc",
              id:  "ai-notebook/connect-switch-kernel",
              label:  "Kết nối và chuyển kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/switch",
              label:  "Kết nối và chuyển kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/shut-down-jp",
              label:  "Tắt kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/shut-down-kernel",
              label:  "Tắt kernel"
            },
            {
              type:  "doc",
              id:  "ai-notebook/faq-jp",
              label:  "Câu hỏi thường gặp"
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
              label:  "Tổng quan"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/quick-start",
              label:  "Hướng dẫn nhanh"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/home-page",
              label:  "Trang chủ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/product-information",
              label:  "Thông tin sản phẩm"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/playground",
              label:  "Playground"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/fine-tune-with-lora",
              label:  "Fine-tune với LoRA"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deployment-lora-inference",
              label:  "Triển khai LoRA inference"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/my-account",
              label:  "Tài khoản của tôi"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/balance",
              label:  "Số dư"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/billing",
              label:  "Thanh toán"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/contact-us",
              label:  "Liên hệ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/how-to-create-an-api-key",
              label:  "Tạo API key"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/api-integration",
              label:  "Tích hợp API"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deprecated-models",
              label:  "Mô hình ngừng hỗ trợ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/FAQ",
              label:  "Câu hỏi thường gặp"
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "data-hub/create-connection",
              label:  "Tạo kết nối"
            },
            {
              type:  "doc",
              id:  "data-hub/generate-dataset",
              label:  "Tạo dataset"
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
              label:  "What Is Model Fine..."
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/faqs",
              label:  "Faqs"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/when-to-use-model-fine-tuning",
              label:  "When To Use Model..."
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
              label:  "Sign Up For An..."
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
              label:  "How To Monitor And..."
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
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "model-hub/dang-nhap",
              label:  "Đăng nhập"
            },
            {
              type:  "doc",
              id:  "model-hub/danh-sach-model",
              label:  "Danh Sach Model"
            },
            {
              type:  "doc",
              id:  "model-hub/how-does-it-work",
              label:  "How does it work"
            },
            {
              type:  "doc",
              id:  "model-hub/chi-tiet-model",
              label:  "Mục đích: Xem chi tiết model"
            },
            {
              type:  "doc",
              id:  "model-hub/why-model-hub",
              label:  "Why Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/tao-model",
              label:  "Mục đích: Thêm mới model vào hệ thống"
            },
            {
              type:  "doc",
              id:  "model-hub/sign-up-for-an-account",
              label:  "Sign Up For An..."
            },
            {
              type:  "doc",
              id:  "model-hub/sua-model",
              label:  "Mục đích: chỉnh sửa lại các thông tin của Model đã tạo"
            },
            {
              type:  "doc",
              id:  "model-hub/xoa-model",
              label:  "Mục đích: xóa 1 model khỏi danh sách các model đã tạo"
            },
            {
              type:  "doc",
              id:  "model-hub/tao-verison",
              label:  "Tao Verison"
            },
            {
              type:  "doc",
              id:  "model-hub/update-version",
              label:  "Mục đích: Cho phép người dùng chỉnh sửa lại 1 version đã tạo"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-version",
              label:  "Xóa phiên bản là xoá thông tin và các tệp của phiên bản trong hệ thống"
            },
            {
              type:  "doc",
              id:  "model-hub/create-a-model",
              label:  "Create a model"
            },
            {
              type:  "doc",
              id:  "model-hub/upload-file",
              label:  "Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng"
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
              id:  "model-hub/delete-file",
              label:  "Mục đích: Xoá các tệp tương ứng với version"
            },
            {
              type:  "doc",
              id:  "model-hub/view-model-details",
              label:  "View Model Details"
            },
            {
              type:  "doc",
              id:  "model-hub/add-share",
              label:  "Mục đích: Chia sẻ model cho User khác không cùng Tenant"
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
              label:  "Các bước thực hiện:"
            },
            {
              type:  "doc",
              id:  "model-hub/share-detail-joined",
              label:  "Các bước thực hiện:"
            },
            {
              type:  "doc",
              id:  "model-hub/create-version",
              label:  "Create a version"
            },
            {
              type:  "doc",
              id:  "model-hub/update-share",
              label:  "Mục đích: Cập nhật quyền của người dùng đã được chia sẻ"
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
              label:  "Mục đích: Nhân bản 1 model giống với model đã có."
            },
            {
              type:  "doc",
              id:  "model-hub/base-model",
              label:  "Base Model"
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
              label:  "Mục đích: view detail organization"
            },
            {
              type:  "doc",
              id:  "model-hub/model-deployment",
              label:  "Mục đích: Kích hoạt, bỏ kích hoạt chức năng deployment của model"
            },
            {
              type:  "doc",
              id:  "model-hub/model-catalog",
              label:  "Model Catalog"
            },
            {
              type:  "doc",
              id:  "model-hub/chi-tiet-model-catalog",
              label:  "Mục đích: Xem chi tiết model"
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
              id:  "model-serving/general-intro-model-serving",
              label:  "Tổng quan"
            },
            {
              type:  "doc",
              id:  "model-serving/initial-set-up",
              label:  "Thiết lập ban đầu"
            },
            {
              type:  "doc",
              id:  "model-serving/terms-definitions",
              label:  "Thuật ngữ và định nghĩa"
            },
            {
              type:  "doc",
              id:  "model-serving/about-fci",
              label:  "Giới thiệu FCI"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-list",
              label:  "Danh sách deployment"
            },
            {
              type:  "doc",
              id:  "model-serving/create-a-new-model-serving-deployment",
              label:  "Tạo deployment mới"
            },
            {
              type:  "doc",
              id:  "model-serving/status-actions-deployment",
              label:  "Trạng thái và hành động"
            },
            {
              type:  "doc",
              id:  "model-serving/detailed-configuration-information",
              label:  "Cấu hình chi tiết"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-configuration-information",
              label:  "Cấu hình deployment"
            },
            {
              type:  "doc",
              id:  "model-serving/traffic-setting-configuration-information",
              label:  "Cấu hình traffic"
            },
            {
              type:  "doc",
              id:  "model-serving/delete-a-deployment",
              label:  "Xóa deployment"
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
              label:  "Model Testing – Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/overview",
              label:  "Model Testing – Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/what-is-model-testing-interactive-sessions",
              label:  "Model Testing – Interactive Sessions là gì"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/when-to-use-model-testing-interactive-sessions",
              label:  "When To Use Model Testing Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/quick-start",
              label:  "Model Testing – Interactive Sessions"
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
              label:  "Model Testing – Test..."
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/what-is-model-testing-test-jobs",
              label:  "Model Testing - Test Jobs là gì"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/when-to-use-model-testing-test-jobs",
              label:  "Khi nào nên sử dụng Model..."
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/quick-start",
              label:  "Model Testing – Test..."
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/sign-up-for-an-account",
              label:  "Đăng ký Tài khoản"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/step-by-step",
              label:  "Hướng dẫn từng bước"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-create-job",
              label:  "Cách Tạo Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/select-model",
              label:  "Chọn Model"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/select-test-suite",
              label:  "Chọn Test Suite"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-select-data-format",
              label:  "Standard - Chọn Định dạng Dữ liệu"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-select-test-data",
              label:  "Standard - Chọn Dữ liệu Kiểm thử"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/standard-test-criteria",
              label:  "Standard - Tiêu chí Kiểm thử"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/others-tasks",
              label:  "Các Tasks Khác"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/set-up-parameters",
              label:  "Thiết lập Tham số"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/finish",
              label:  "Hoàn tất"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-manage-job",
              label:  "Cách Quản lý Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-job",
              label:  "Chạy Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/cancel-job",
              label:  "Hủy Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/delete-job",
              label:  "Xóa Job"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-history",
              label:  "Lịch sử Run"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/how-to-evaluate-model",
              label:  "Model Testing – Test..."
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/run-details",
              label:  "Chi tiết Run"
            },
            {
              type:  "doc",
              id:  "model-testing-test-jobs/faq",
              label:  "Câu hỏi thường gặp"
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
          label:  "Giới thiệu GPU Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/quick-start",
          label:  "Đăng ký tài khoản"
        },
        {
          type:  "doc",
          id:  "gpu-container/create-new-container",
          label:  "GPU Container"
        },
        {
          type:  "doc",
          id:  "gpu-container/create-via-gui",
          label:  "Tạo container qua giao diện"
        },
        {
          type:  "doc",
          id:  "gpu-container/import-config",
          label:  "Nhập cấu hình"
        },
        {
          type:  "doc",
          id:  "gpu-container/export-config",
          label:  "Xuất cấu hình"
        },
        {
          type:  "doc",
          id:  "gpu-container/connect-container",
          label:  "Kết nối container"
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
          label:  "Vllm Use Cases Gpt..."
        },
        {
          type:  "doc",
          id:  "gpu-container/ollama-use-cases",
          label:  "Ollama Use Cases"
        },
        {
          type:  "doc",
          id:  "gpu-container/code-server-use-cases",
          label:  "Load fine-tuned model and..."
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
          label:  "Tổng quan"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/quick-start",
          label:  "Quick Start"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/初期-設定",
          label:  "Thiết lập ban đầu"
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
          label:  "Tạo Subnet"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/GPU-VM -インスタンス-の-作成",
          label:  "Tạo GPU VM Instance"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/block-storage",
          label:  "Block Storage"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/IPアドレス（フローティングIP）の割り当て",
          label:  "Cấp phát Floating IP"
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
          label:  "Tạo Security Group"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/floating-ip",
          label:  "Floating Ip"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/サーバーへのアクセス",
          label:  "Truy cập máy chủ"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/create-a-security-group",
          label:  "Create A Security Group"
        },
        {
          type:  "doc",
          id:  "gpu-virtual-machine-en/に関するよくある質問",
          label:  "Câu hỏi thường gặp"
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
          label:  "Thiết lập ban đầu"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Managed-GPU ク-ラ-ス-タ-ー-の-管-理",
          label:  "Quản lý Managed GPU Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/新-し-い- Managed-GPU -ク-ラ-ス-タ-ー-を-起-動",
          label:  "Khởi động Managed GPU Cluster mới"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/作成済みの Managed GPU クラスターの一覧を表示",
          label:  "Xem danh sách Managed GPU Cluster đã tạo"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/クラスターのアクセス情報を取得",
          label:  "Lấy thông tin truy cập cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Managed GPU クラスターを削除",
          label:  "Xóa Managed GPU Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/K8S クラスターの構成を変更",
          label:  "Thay đổi cấu hình K8S Cluster"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループを追加",
          label:  "Thêm Worker Group"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/マニュアルスケール機能",
          label:  "Tính năng Manual Scale"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのラベル-汚染を編集",
          label:  "Chỉnh sửa Label và Taint của Worker Group"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのベース切り替え機能",
          label:  "Tính năng chuyển đổi base của Worker Group"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/サービス種別：ロードバランサー",
          label:  "Loại dịch vụ: Load Balancer"
        },
        {
          type:  "doc",
          id:  "managed-gpu-cluster-kubernetes-ja/Ollama と Open WebUI を使用した DeepSeek-R1 モデルのデプロイ",
          label:  "Triển khai mô hình DeepSeek-R1..."
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
          label:  "Metal Cloud là gì"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/クイックスタート",
          label:  "Bắt đầu nhanh"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サーバーの作成",
          label:  "Tạo server"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/Metal Cloud OS and Images",
          label:  "Custom image"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/Metal Cloud RAID",
          label:  "Định nghĩa RAID"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/ユーザーデータ",
          label:  "User data"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サーバーアクション",
          label:  "Bật và tắt server"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/アクセスサーバー",
          label:  "Console KVM"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/サブネット",
          label:  "Tạo subnet"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/ネットワーク ACL",
          label:  "Tổng quan Network ACL"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/監視サーバー",
          label:  "Giám sát server"
        },
        {
          type:  "doc",
          id:  "metal-cloud-ja/FAQ",
          label:  "Tổng quan"
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
          id:  "model-testing/model-testing",
          label:  "Kiểm thử mô hình"
        },
        {
          type:  "doc",
          id:  "model-testing/definition",
          label:  "Định nghĩa"
        },
        {
          type:  "doc",
          id:  "model-testing/key-features",
          label:  "Tính năng chính"
        },
        {
          type:  "doc",
          id:  "model-testing/create-an-interactive-session",
          label:  "Tạo interactive session"
        },
        {
          type:  "doc",
          id:  "model-testing/test-models-response",
          label:  "Kiểm thử phản hồi mô hình"
        },
        {
          type:  "doc",
          id:  "model-testing/completion-history",
          label:  "Lịch sử completion"
        }
      ]
    }
  ]
};
