// Japanese sidebar - synced with EN structure
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
              id:  "タグ-付け/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "タグ-付け/create-tag-new",
                  label:  "タグの作成"
                },
                {
                  type:  "doc",
                  id:  "タグ-付け/edit-tag",
                  label:  "タグの編集"
                },
                {
                  type:  "doc",
                  id:  "タグ-付け/delete-tag",
                  label:  "タグの削除"
                }
              ]
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "リソースのタグ管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "タグ-付け/resource-1",
                      label:  "リソースのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-instance",
                      label:  "Instanceのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-storage-disk",
                      label:  "Storage Diskのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-snapshot",
                      label:  "Snapshotのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-custom-image",
                      label:  "Custom Imageのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-floating-ip",
                      label:  "Floating IPのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-subnet",
                      label:  "Subnetのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tags-security-group",
                      label:  "Security Groupのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tagg-lb",
                      label:  "Load Balancerのタグ管理"
                    },
                    {
                      type:  "doc",
                      id:  "タグ-付け/tagging",
                      label:  "タグ付けの概要"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "タグ-付け/tagging-billing",
                  label:  "タグ別請求"
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
              label:  "概要"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/config-sso",
                  label:  "SSOの設定"
                },
                {
                  type:  "doc",
                  id:  "sso-single-sign-on/use-sso",
                  label:  "SSOの使用"
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
              id:  "policy-management/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-overview-policy",
                  label:  "ポリシー管理のクイック作成"
                },
                {
                  type:  "doc",
                  id:  "policy-management/apply-policy",
                  label:  "ポリシーの適用"
                }
              ]
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "policy-management/create-policy",
                  label:  "ポリシー管理の作成"
                },
                {
                  type:  "doc",
                  id:  "policy-management/edit-policy",
                  label:  "ポリシーの編集"
                },
                {
                  type:  "doc",
                  id:  "policy-management/delete-policy",
                  label:  "ポリシーの削除"
                },
                {
                  type:  "doc",
                  id:  "policy-management/disable-policy",
                  label:  "ポリシーを無効にする"
                },
                {
                  type:  "doc",
                  id:  "policy-management/enable-policy",
                  label:  "ポリシーを有効にする"
                },
                {
                  type:  "doc",
                  id:  "policy-management/policy-management",
                  label:  "ポリシー管理"
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
              id:  "global-search/global-search-phase-1",
              label:  "グローバル検索ガイド"
            },
            {
              type:  "doc",
              id:  "global-search/global-search",
              label:  "グローバル検索"
            },
            {
              type:  "doc",
              id:  "global-search/global-search-usage",
              label:  "グローバル検索の使い方"
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
              label:  "登録・ログイン",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-ky",
                  label:  "アカウント登録"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/dang-nhap",
                  label:  "ログイン"
                }
              ]
            },
            {
              type:  "category",
              label:  "個人・組織情報の登録",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/create-organization",
                  label:  "Organizationの作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/home-page-portal",
                  label:  "Portalのホームページ"
                }
              ]
            },
            {
              type:  "category",
              label:  "アカウントチャージ",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/recharge-via-gift-code",
                  label:  "ギフトコードによるチャージ"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/deposit-money-via-VNPay",
                  label:  "VNPayによるチャージ"
                }
              ]
            },
            {
              type:  "category",
              label:  "仮想マシンの購入",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-virtual-machines",
                  label:  "仮想マシンの購入"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-virtual-machine-configuration",
                  label:  "仮想マシン構成の変更"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-Public-IP",
              label:  "Public IPの購入"
            },
            {
              type:  "category",
              label:  "ストレージの購入",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/buy-storage-disk",
                  label:  "ストレージディスクの購入"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/change-removable-drive-capacity",
                  label:  "ストレージディスク容量の変更"
                }
              ]
            },
            {
              type:  "category",
              label:  "サービス請求の確認",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-billing-by-monthly-reconciliation",
                  label:  "月次請求の確認"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/view-performed-transactions",
                  label:  "取引履歴の確認"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go",
                  label:  "Fpt Cloud Portal Pay As You Gofpt Cloud Portal Pay As You Go"
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
              id:  "fpt-cloud-desktop/overview-fcd",
              label:  "詳細概要"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-desktop/initial-setup",
              label:  "前提条件"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "SSO (Azure) アカウントでログイン",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-tai-khoan-SSO",
                      label:  "SSOアカウントでログイン"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/SSO-qua-FCDClient-moi",
                      label:  "新しいFCDClient経由（推奨）"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/SSO-qua-web-browser",
                      label:  "Webブラウザ経由"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/SSO-qua-FCDClient-cu",
                      label:  "旧FCDClient経由"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "アカウント/パスワードでログイン",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/dang-nhap-voi-account-password",
                      label:  "Account/Passwordでログイン"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-moi",
                      label:  "新しいFCDClient経由（推奨）"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-web-browser",
                      label:  "Webブラウザ経由"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-desktop/accountpassword-qua-FCDClient-cu",
                      label:  "旧FCDClient経由"
                    }
                  ]
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-cloud-desktop/faq",
              label:  "よくある質問（FAQs）"
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
              label:  "Profileの管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-profile",
                  label:  "Profileの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-profile",
                  label:  "Profileの作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/doi-ten-profile",
                  label:  "Profileの名前変更"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-profile",
                  label:  "Profileの削除"
                }
              ]
            },
            {
              type:  "category",
              label:  "Groupの管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-group",
                  label:  "Groupの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-group",
                  label:  "Groupの作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/giam-sat-group",
                  label:  "Groupの監視"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/thay-doi-profile-cho-group",
                  label:  "GroupのProfileを変更する"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-thu-cong",
                  label:  "手動スケール"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/scale-tu-dong-theo-lich-trinh",
                  label:  "スケジュールによる自動スケール"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-group",
                  label:  "Groupの削除"
                }
              ]
            },
            {
              type:  "category",
              label:  "Policyの管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-autoscale/quan-ly-policy",
                  label:  "Policyの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/khoi-tao-policy",
                  label:  "Policyの作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/attach-policy-vao-group",
                  label:  "GroupへのPolicyのAttach"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/detach-policy-khoi-group",
                  label:  "GroupからのPolicyのDetach"
                },
                {
                  type:  "doc",
                  id:  "fpt-autoscale/xoa-policy",
                  label:  "Policyの削除"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "仮想マシンの作成",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quick-starts-tao-mot-may-ao",
                      label:  "仮想マシンの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-vm-iso",
                      label:  "ISOファイルからのVM作成時の注意事項"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/clone-instance",
                  label:  "仮想マシンのクローン"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-tatbat-may-ao",
                  label:  "仮想マシンの起動/停止"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-khoi-dong-lai-may-ao",
                  label:  "仮想マシンの再起動"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/lock-unlock-instance-deletion",
                  label:  "削除ロック & ロック解除"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/quick-starts-xoa-may-ao",
                  label:  "仮想マシンの削除"
                }
              ]
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "仮想マシンの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-may-ao",
                      label:  "仮想マシンの管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-mot-may-ao-moi",
                      label:  "新しい仮想マシンの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-windows",
                      label:  "Windows仮想マシンへの接続"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-ket-noi-vao-may-ao-linux",
                      label:  "Linux仮想マシンへの接続"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/attach-a-network-card-to-the-virtual-machine",
                      label:  "仮想マシンへのNIC追加"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/remove-the-network-card-from-the-virtual-machine",
                      label:  "仮想マシンからのNIC削除"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao",
                      label:  "仮想マシン情報の確認"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu",
                      label:  "仮想マシン構成の変更"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-backup-may-chu-voi-snapshot",
                      label:  "Snapshotによるバックアップ"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-xoa-may-ao",
                      label:  "仮想マシンの削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Portal ConsoleでのGPU管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/GPU",
                      label:  "Portal ConsoleでのGPU管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-general",
                      label:  "Console PortalでのGPU管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gpu-specific",
                      label:  "SpecificサービスのGPU管理"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "HPC PortalでのGPU Server管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-gpu-voi-hpc-portal",
                      label:  "HPC PortalでのGPU Server管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-quick-start",
                      label:  "クイックスタート"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-change-package",
                      label:  "マシン設定の変更"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-fixed-rental",
                      label:  "固定レンタル期間の設定"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-snapshot-backup",
                      label:  "Snapshotバックアップ"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-hardware-fixation",
                      label:  "ハードウェア固定"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-rest-machine",
                      label:  "マシンのリセット"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-schedule-shutdown",
                      label:  "シャットダウンスケジュール"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-clone-image",
                      label:  "Imageのクローン"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-level-2-password",
                      label:  "第2レベルパスワードの設定"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/hpc-delete-image",
                      label:  "Imageの削除"
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
                      label:  "Storage Disk の作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gan-storage-disk-vao-may-ao",
                      label:  "Storage Disk を Instance にアタッチする"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/cau-hinh-o-dia-cho-may-ao-chay-windows",
                      label:  "Windows Instance のディスクを設定する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/go-storage-disk-khoi-may-ao",
                      label:  "Storage Disk を Instance からデタッチする"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-storage-disk",
                      label:  "Storage Disk の編集"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-storage-disk",
                      label:  "Storage Disk の削除"
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
                      label:  "Token の作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/revoke-token",
                      label:  "Revoke Token"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/FQAs",
                      label:  "よくある質問"
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
                      label:  "Custom Image のアップロード"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/xoa-custom-image",
                      label:  "Custom Image の削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Instance Templateの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-instance-template",
                      label:  "Instance Templateの管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-khoi-tao-template-tu-may-ao",
                      label:  "仮想マシンからTemplateを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-quan-ly-template-duoc-tao-tu-may-ao",
                      label:  "Custom ImagesでTemplateを管理する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-tao-instance-tu-template",
                      label:  "TemplateからInstanceを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/tutorials-xoa-template",
                      label:  "Templateを削除する"
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
                  label:  "NIC (Network Interface Card) の管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/NIC-overview-1",
                      label:  "NICの管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/overview-nic",
                      label:  "概要"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-card-NIC- Primary",
                      label:  "Primary NICカードを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/disable-NIC-card",
                      label:  "Network Interface Cardを無効化する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/enable-NIC-card",
                      label:  "Network Interface Cardを有効化する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/add-card-NIC- new",
                      label:  "新しいNetwork Interface Cardを追加する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/convert-card",
                      label:  "カードをPrimaryに変換する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-ip-address",
                      label:  "IP Addressを編集する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/change-address-MAC",
                      label:  "MACアドレスを変更する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-card-NIC",
                      label:  "Network Interface Cardを削除する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/change-network-config",
                      label:  "Network Configを変更する"
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
                      label:  "ネットワーキング概要"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/networking-overview",
                      label:  "ネットワーキング詳細"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/gateway",
                      label:  "Gateway"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-floating-ip",
                      label:  "Floating IP管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/Quản lý Subnets",
                      label:  "Subnet管理"
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
                  label:  "Security Groupの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-security-group",
                      label:  "Security Group管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-filter",
                      label:  "Security Groupのフィルター"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/security-group-priority-rule",
                      label:  "Priority Rule管理"
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
                  label:  "Affinity & Anti-Affinity Instanceグループの管理",
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
                      label:  "概要"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-instance-group",
                      label:  "Instance Groupの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/edit-instance-group-specific",
                      label:  "Instance Groupの編集"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/add-instance-instance-group",
                      label:  "InstanceをGroupに追加"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-instance-group",
                      label:  "Instance Groupの削除"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/overview-bell",
                  label:  "通知ベル"
                },
                {
                  type:  "category",
                  label:  "Projectの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/project-structure",
                      label:  "Project管理"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/quan-ly-project",
                      label:  "Project管理の詳細"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/select-project-when-creating-VPC",
                      label:  "VPC作成時のProject選択"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/header-project",
                      label:  "ヘッダーインターフェースの変更"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "cloud-server/new-quota",
                  label:  "PAYGサービス"
                },
                {
                  type:  "category",
                  label:  "Auto schedule to on-off Instance",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/instance-schedule",
                      label:  "インスタンス起動・停止スケジュール"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-overview",
                      label:  "概要"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-new-instance",
                      label:  "Instance Scheduleの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/view-detail-instance",
                      label:  "詳細の確認"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/attach-schedule-to-instance",
                      label:  "InstanceをScheduleにアタッチ"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/detach-schedule-to-instance",
                      label:  "InstanceをScheduleからデタッチ"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/delete-instance-schedule",
                      label:  "Instance Scheduleの削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "VMスナップショットスケジュール",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotVM",
                      label:  "インスタンスSnapshotスケジュール"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/create-schedule-snapshotVM",
                      label:  "インスタンスSnapshotスケジュールの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotVM",
                      label:  "詳細の確認"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotVM",
                      label:  "編集"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotVM",
                      label:  "インスタンスSnapshotスケジュールの削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "ディスクスナップショットスケジュール",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-server/schedule-snapshotstorage",
                      label:  "ストレージディスクSnapshotスケジュール"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/createschedule-snapshotstorage",
                      label:  "ストレージディスクSnapshotスケジュールの作成"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/viewschedule-snapshotstorage",
                      label:  "詳細の確認"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/editschedule-snapshotstorage",
                      label:  "編集"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-server/deleteschedule-snapshotstorage",
                      label:  "ストレージディスクSnapshotスケジュールの削除"
                    }
                  ]
                }
              ]
            },
            {
              type:  "category",
              label:  "よくある質問",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "cloud-server/question-2",
                  label:  "FAQ：Security Groupルールのカスタマイズ"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-1",
                  label:  "FAQ：Address Pairの編集"
                },
                {
                  type:  "doc",
                  id:  "cloud-server/question-",
                  label:  "FAQ：NAT Instance"
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
                  label:  "概要"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/create-instance-group",
                  label:  "Instance Groupの作成"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/add-instance-instance-group",
                  label:  "InstanceをInstance Groupに追加"
                },
                {
                  type:  "doc",
                  id:  "affinity-anti-affinity/delete-instance-group",
                  label:  "Instance Groupの削除"
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
                  id:  "allow-address-pair/initial-setup",
                  label:  "初期セットアップ"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/create-address-pair",
                  label:  "Create Address Pair"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/create-address-pair-on-instance-management",
                  label:  "Create Address Pair on Instance Management"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/delete-address-pair",
                  label:  "方法1: Allow Address Pair管理画面から削除する"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/activity-log",
                  label:  "Activity Log"
                },
                {
                  type:  "doc",
                  id:  "allow-address-pair/question-1",
                  label:  "作成済みのAddress Pairを編集できないのはなぜですか？"
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
                  label:  "Instanceの自動スケジュール起動/停止"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/manage-version-schedules",
                  label:  "Instance scheduleの管理"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/create-new-instance",
                  label:  "新しいinstance scheduleの作成"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/view-detail-instance",
                  label:  "Instance scheduleの詳細確認"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/delete-instance-schedule",
                  label:  "Instance scheduleの削除"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/use-instance-schedules-for-virtual-machines",
                  label:  "仮想マシンへのinstance scheduleの活用"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/attach-schedule-to-instance",
                  label:  "Instance scheduleへの仮想マシンの紐付け"
                },
                {
                  type:  "doc",
                  id:  "auto-schedule-to-on-off-instance/detach-schedule-to-instance",
                  label:  "Instance scheduleからの仮想マシンの解除"
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
                  label:  "ネットワーク設定の変更"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-static-IP-in-Ubuntu-server",
                  label:  "Ubuntu Serverで静的IPを設定する"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-static-IP-in-window-server",
                  label:  "Windows Serverで静的IPを設定する"
                },
                {
                  type:  "doc",
                  id:  "change-network-config/change-statis-IP-in-CentOS",
                  label:  "CentOSで静的IPを設定する"
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
                  label:  "インスタンス削除のロック & ロック解除"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/lock-instance-deletion",
                  label:  "インスタンス削除のロック"
                },
                {
                  type:  "doc",
                  id:  "lock-unlock-instance-deletion/unlock-instance-deletion",
                  label:  "インスタンス削除のロック解除"
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
                  label:  "ネットワークインターフェースカード (NIC)"
                },
                {
                  type:  "doc",
                  id:  "nic/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "nic/create-card-NIC- Primary",
                  label:  "プライマリNICの作成"
                },
                {
                  type:  "doc",
                  id:  "nic/disable-NIC-card",
                  label:  "NICカードの無効化"
                },
                {
                  type:  "doc",
                  id:  "nic/enable-NIC-card",
                  label:  "NICカードの有効化"
                },
                {
                  type:  "doc",
                  id:  "nic/add-card-NIC- new",
                  label:  "新しいNICカードの追加"
                },
                {
                  type:  "doc",
                  id:  "nic/convert-card",
                  label:  "カードをプライマリに変換"
                },
                {
                  type:  "doc",
                  id:  "nic/edit-ip-address",
                  label:  "IPアドレスの編集"
                },
                {
                  type:  "doc",
                  id:  "nic/change-address-MAC",
                  label:  "MACアドレスの変更"
                },
                {
                  type:  "doc",
                  id:  "nic/delete-card-NIC",
                  label:  "NICカードの削除"
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
                  id:  "notification-bell/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "notification-bell/show-notification",
                  label:  "通知ベルアイコンの表示"
                },
                {
                  type:  "doc",
                  id:  "notification-bell/see-notification-bell",
                  label:  "通知を確認する"
                }
              ]
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
              id:  "relation-management/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "relation-management/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
              label:  "FPT Cloudアカウントの作成とFPT Portalへのログイン"
            },
            {
              type:  "doc",
              id:  "relation-management/tao-work-space",
              label:  "ワークスペースの作成"
            },
            {
              type:  "doc",
              id:  "relation-management/truy-cap-dich-vu",
              label:  "サービスへのアクセス"
            },
            {
              type:  "doc",
              id:  "relation-management/app-relation-management",
              label:  "App Relation Management"
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
              label:  "1, リレーションの作成"
            },
            {
              type:  "doc",
              id:  "relation-management/datasource-relation-management",
              label:  "Datasource Relation Management"
            },
            {
              type:  "doc",
              id:  "relation-management/dashboard",
              label:  "ダッシュボード"
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
              id:  "terraform/overview-terraform",
              label:  "Terraformの概要"
            },
            {
              type:  "doc",
              id:  "terraform/set-up",
              label:  "セットアップガイド"
            },
            {
              type:  "doc",
              id:  "terraform/document-terraform",
              label:  "Terraformドキュメント"
            },
            {
              type:  "doc",
              id:  "terraform/command-terraform",
              label:  "Terraformリソーススクリプト"
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
              label:  "ユーザートークン"
            },
            {
              type:  "doc",
              id:  "user-token/overview",
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "user-token/quick-start",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "user-token/how-to-create-an-user-token",
              label:  "ユーザートークンの作成方法"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-object-storage/migrate-bucket-data",
                  label:  "bucket データの移行"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/object-storage",
                  label:  "概要"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/use-on-fpt-portal",
                  label:  "FPT Portal での利用"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/manage-bucket",
                  label:  "bucket の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/manage-objects",
                  label:  "object の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/manage-permissions",
                  label:  "Permissions"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/bucket-config",
                  label:  "bucket の設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/encryption",
                  label:  "暗号化（SSE-C）"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/manage-access-keys",
                  label:  "access key の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/manage-subusers",
                  label:  "subuser の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-using-object-storage-on-s3-browser",
                  label:  "S3 Browser での利用"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/tutorials-integrate-fpt-object-storage-with-s3-client",
                  label:  "S3 クライアントとの統合"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/sdk-api-reference",
                  label:  "SDK・API リファレンス"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application",
                  label:  "メディアサーバーとして使用"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/build-static-website",
                  label:  "静的ウェブサイトの構築"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/mount-bucket-thanh-o-dia-tren-may-local",
                  label:  "ローカルへの bucket マウント"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau",
                  label:  "bucket 間のデータクローン"
                },
                {
                  type:  "doc",
                  id:  "fpt-object-storage/subuser-bucket-permissions",
                  label:  "subuser への bucket 権限付与"
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
              label:  "初期セットアップ"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "ベトナムリージョン",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/region-viet-nam",
                      label:  "ベトナムリージョン"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/quan-ly-mountpoint",
                      label:  "MountPoint の管理"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                      label:  "Baremetal (GPU Server) での利用"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "日本リージョン",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/region-nhat-ban",
                      label:  "日本リージョン"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
                      label:  "Baremetal (GPU Server) での利用 (日本)"
                    },
                    {
                      type:  "doc",
                      id:  "file-storage-high-performance/su-dung-file-storage-high-performance-tren-kubernetes-k8s-cluster",
                      label:  "Kubernetes (K8S Cluster) での利用"
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
                  id:  "load-balancer/resize-load-balancer",
                  label:  "ロードバランサーのリサイズ"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/access-logs",
                  label:  "アクセスログ"
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
                  id:  "load-balancer/redirect-prefix",
                  label:  "リダイレクトプレフィックス"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/load-balancer",
                  label:  "ロードバランサー"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/create-load-balancer",
                  label:  "ロードバランサーの作成"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/update-load-balancer",
                  label:  "ロードバランサーの更新"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/monitor-load-balancer",
                  label:  "ロードバランサーの監視グラフ"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/integrate-with-fmon",
                  label:  "FMON との連携"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/add-external-member",
                  label:  "外部メンバーの追加"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/create-listener",
                  label:  "リスナーの作成"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/configure-timeout",
                  label:  "タイムアウトの設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/configure-l7-policy",
                  label:  "L7 ポリシーの設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/redirect-http-to-https",
                  label:  "HTTP から HTTPS へのリダイレクト"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/enable-hsts",
                  label:  "HSTS の有効化"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/allow-ip-cidr",
                  label:  "許可 IP/CIDR の設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/configure-sni",
                  label:  "SNI の設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/create-server-pool",
                  label:  "サーバープールの作成"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/manage-pool-members",
                  label:  "プールメンバーの追加・削除"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/configure-health-check",
                  label:  "ヘルスチェックの設定"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/import-ssl-certificate",
                  label:  "SSL 証明書のインポート"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/delete-ssl-certificate",
                  label:  "SSL 証明書の削除"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-create-load-balancer",
                  label:  "クラシック LB の作成"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-add-instance",
                  label:  "クラシック LB に VM を追加"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-remove-instance",
                  label:  "クラシック LB から VM を削除"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-update-load-balancer",
                  label:  "クラシック LB の設定変更"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-delete-load-balancer",
                  label:  "クラシック LB の削除"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-import-ssl-certificate",
                  label:  "SSL 証明書のインポート（クラシック）"
                },
                {
                  type:  "doc",
                  id:  "load-balancer/classic-view-ssl-certificate",
                  label:  "SSL 証明書の詳細確認（クラシック）"
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
              id:  "create-vpc/vpc-の作成",
              label:  "VPC の作成"
            },
            {
              type:  "doc",
              id:  "create-vpc/初期設定_1",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "create-vpc/VPC の作成_1",
              label:  "VPCを作成する"
            },
            {
              type:  "doc",
              id:  "create-vpc/rename-vpc-en",
              label:  "VPCの名前変更"
            },
            {
              type:  "doc",
              id:  "create-vpc/アクティビティログ＆直近タスクステータスの記録_3",
              label:  "Activity logとタスクステータスの確認"
            }
          ]
        },
        {
          type:  "category",
          label:  "Gateway",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "gateway/huong-dan",
              label:  "Gatewayへのアクセス"
            },
            {
              type:  "doc",
              id:  "gateway/quan-ly-danh-sach-gateway",
              label:  "Gatewayリストの管理"
            },
            {
              type:  "doc",
              id:  "gateway/quan-ly-route-1-gateway",
              label:  "Routeの管理"
            },
            {
              type:  "doc",
              id:  "gateway/quan-ly-nat-tung-gateway",
              label:  "NAT Ruleの管理"
            },
            {
              type:  "doc",
              id:  "gateway/quan-ly-no-nat-rule-theo-gateway",
              label:  "NO NAT Ruleの管理"
            },
            {
              type:  "doc",
              id:  "gateway/tinh-nang-khac",
              label:  "その他の機能"
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
              id:  "nat_instance/overview-nat-instance",
              label:  "NAT Instanceの概要"
            },
            {
              type:  "doc",
              id:  "nat_instance/Initial-Setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "nat_instance/use-nat-instance",
              label:  "Generalサービスプランのユーザーのみ利用可能"
            },
            {
              type:  "doc",
              id:  "nat_instance/setting-nat-instance",
              label:  "NAT Instanceの設定"
            },
            {
              type:  "doc",
              id:  "nat_instance/question",
              label:  "NAT Instanceは通常のインスタンスとして使用できますか？"
            }
          ]
        },
        {
          type:  "category",
          label:  "VPN Site-to-Site",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間VPNの作成 -1",
              label:  "サイト間VPNの作成"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/VPN情報の確認",
              label:  "VPN情報の確認"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間VPNの無効化 -1",
              label:  "サイト間VPNの無効化"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間VPNを有効にする-2",
              label:  "サイト間VPNの有効化"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間VPNの情報編集 -3",
              label:  "VPN情報の編集"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間VPNの構成情報をダウンロード",
              label:  "VPN構成情報のダウンロード"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/サイト間の削除-5",
              label:  "サイト間VPNの削除"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/VPNアクティビティの確認",
              label:  "VPN Activity logの確認"
            },
            {
              type:  "doc",
              id:  "vpn-site-to-site/認証証明書モード",
              label:  "証明書認証モード"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Kubernetes Clusterの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster",
                      label:  "クラスターの詳細情報へのアクセス"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-rotate-kubeconfig",
                      label:  "kubeconfig のローテーション機能"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "K8s Cluster設定の変更",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-k8s-cluster",
                      label:  "K8s Cluster の設定変更"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cluster-endponit-access",
                      label:  "クラスターエンドポイントアクセスの変更"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-internal-subnet-load-balancer",
                      label:  "Internal subnet Load Balancer（CIDR）設定の変更"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group",
                      label:  "ワーカーグループの label/taint 設定変更"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/bat-tat-node-auto-repair",
                      label:  "Node Auto-repair の有効化/無効化"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/chuyen-worker-group-base",
                      label:  "ベースワーカーグループの切り替え"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cluster-autoscale",
                      label:  "Cluster Autoscale の有効化"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool",
                  label:  "ワーカープールへのアプリケーションのデプロイ"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/scale-in-chi-dinh-node",
                  label:  "クラスター内の特定 node を指定したスケールイン機能"
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
                  label:  "Hibernate & Wake-up 機能"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/tinh-nang-dat-lich-hibernate-wake-up",
                  label:  "Hibernate & Wake-up スケジュール機能"
                },
                {
                  type:  "category",
                  label:  "自動バージョンアップグレード",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tu-dong-nang-cap-version",
                      label:  "バージョン自動アップグレード機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gioi-thieu-chung-ve-quy-trinh-quan-ly-version",
                      label:  "FPTCloud における Kubernetes バージョン管理プロセスの概要"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade",
                      label:  "auto upgrade version 機能の詳細ガイド"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/fpt-cloud-managed-kubernetes-release-calendar",
                  label:  "FPT Cloud Managed Kubernetes リリースカレンダー"
                },
                {
                  type:  "category",
                  label:  "MFKEセキュリティ強化機能",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-tang-cuong-bao-mat-mfke",
                      label:  "M-FKE のセキュリティ強化機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-benchmark-cluster",
                      label:  "Managed Kubernetes Cluster のベンチマーク機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-runtime-security-cluster",
                      label:  "Runtime Security 機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tinh-nang-workload-scan",
                      label:  "ワークロードスキャン機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/audit-log-vn",
                      label:  "Audit Logs Security 機能の概要"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/danh-tag-cho-vm",
                  label:  "仮想マシンへのタグ付け機能"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/backup-restore-vn",
                  label:  "Backup & Restore 機能"
                }
              ]
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-m-fke",
              label:  "M-FKE 使用上の注意事項"
            },
            {
              type:  "doc",
              id:  "managed-fpt-kubernetes-engine/mfke-faqs",
              label:  "よくある質問"
            },
            {
              type:  "category",
              label:  "サンプル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/microservices-architecture-on-fke",
                  label:  "FKE 上のマイクロサービスアーキテクチャ"
                },
                {
                  type:  "category",
                  label:  "GPU là gì?",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-la-gi",
                      label:  "GPU とは？"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-cloud",
                      label:  "クラウドで GPU を使用する理由"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/tai-sao-nen-su-dung-gpu-tren-kubernetes",
                      label:  "Kubernetes で GPU を使用する理由"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/gpu-sharing",
                      label:  "GPU Sharing"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/dich-vu-gpu-tren-k8s",
                      label:  "Kubernetes 上の GPU サービス"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service",
                  label:  "CoreDNS 設定の調整"
                },
                {
                  type:  "category",
                  label:  "KubernetesでのPersistent Volumeのスナップショットとリストア",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s",
                      label:  "Persistent Volume のスナップショット機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/restore-persistent-volume-tren-k8s",
                      label:  "スナップショットからの volume リストア機能"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc",
                      label:  "PVC スナップショットのスケジュール設定"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot",
                      label:  "PVC スナップショット削除スケジュールの設定"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Proxy Protocolの設定",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol",
                      label:  "Proxy Protocol の設定"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-istio-ingress",
                      label:  "istio-ingress の Proxy Protocol 設定"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress",
                      label:  "nginx-ingress の Proxy Protocol 設定"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/index",
                      label:  "Managed FPT Kubernetes Engine"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi",
                      label:  "新しい Kubernetes Cluster の作成"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/enable-cluster-autoscale",
                      label:  "Cluster Autoscale の有効化"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/disable-cluster-autoscale",
                      label:  "Cluster Autoscale の無効化"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/modify-cluster-autoscale-configuration",
                      label:  "Cluster Autoscale 構成の変更"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/load-balancer-services",
                      label:  "Load Balancer サービス"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/how-to-use-gpu-in-kubernetes",
                      label:  "Kubernetes での GPU の使用"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/setup-k8s-cluster-for-gpu-usage",
                      label:  "GPU 用クラスターのセットアップ"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/addding-gpu-worker-group",
                      label:  "GPU Worker Group の追加"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/deploy-application-with-gpu-on-k8s",
                      label:  "GPU アプリのデプロイ"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/setting-up-gpu-telemetry",
                      label:  "GPU テレメトリーの設定"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/container-level-auto-scaling",
                      label:  "コンテナレベルの自動スケーリング"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/node-level-auto-scaling",
                      label:  "ノードレベルの自動スケーリング"
                    },
                    {
                      type:  "doc",
                      id:  "managed-fpt-kubernetes-engine/snapshot-va-restore-pvc-tren-k8s-fpt",
                      label:  "PVC のスナップショットとリストア"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/service-type-kb-layer7-lbv2",
                  label:  "Service Type Loadbalancer Layer 7（LBv2）の使用"
                },
                {
                  type:  "doc",
                  id:  "managed-fpt-kubernetes-engine/thay-doi-cau-hinh-flavor-cua-worker-pool",
                  label:  "ワーカープールのフレーバー設定変更"
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
              label:  "Kubernetes FPT Cloud上のGPUサービス概要"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu",
              label:  "GPU対応Kubernetesクラスターのインストールと初期化"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/thay-doi-worker-group-su-sung-gpu",
              label:  "GPUワーカーグループの変更"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes",
              label:  "KubernetesへのGPUアプリケーションのデプロイ"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry",
              label:  "GPUテレメトリの使用方法"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu",
              label:  "GPUでのAutoscalerの使用方法"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing",
              label:  "GPU共有モードの使用方法"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu",
              label:  "GPUワーカーグループの追加"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/driver-installation-self-install",
              label:  "KubernetesへのGPUドライバーインストールガイド"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric",
              label:  "GPUカスタムメトリクスを使用したオートスケールの設定"
            },
            {
              type:  "doc",
              id:  "fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus",
              label:  "KEDAとPrometheusを使用したオートスケールの設定"
            }
          ]
        },
        {
          type:  "category",
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-container-registry/docker-login",
              label:  "Docker Login"
            },
            {
              type:  "category",
              label:  "Scan Images",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-container-registry/scan-image",
                  label:  "イメージをスキャンする"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/fpt-container-registry",
                  label:  "FPT Container Registry"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/initial-setup",
                  label:  "初期セットアップ"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/enabling-fpt-container-registry-service",
                  label:  "サービスを有効化する"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tagging-and-pushing-images-to-fpt-container-registry",
                  label:  "イメージを tag して push する"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/pulling-docker-image-from-fpt-container-registry-to-local",
                  label:  "Docker イメージを pull する"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/deleting-an-image-or-artifact-in-a-repository",
                  label:  "Repository を管理する"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/tao-moi-robot-account",
                  label:  "Robot account を管理する"
                },
                {
                  type:  "doc",
                  id:  "fpt-container-registry/retention-rule",
                  label:  "Retention rule を管理する"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "K8s Cluster設定の変更",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/scale-worker-nodes",
                  label:  "Worker Nodes のスケール"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/dedicated-fpt-kubernetes-engine",
                  label:  "Dedicated FPT Kubernetes Engine"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/managing-k8s-cluster",
                  label:  "Kubernetes クラスターの管理"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/create-new-k8s-cluster",
                  label:  "新規 Kubernetes cluster の作成"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/list-created-clusters",
                  label:  "クラスター一覧の表示"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/access-clusters-detail-information",
                  label:  "クラスター詳細情報へのアクセス"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/get-cluster-access-information",
                  label:  "cluster アクセス情報の取得"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/delete-k8s-cluster",
                  label:  "クラスターの削除"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/stop-k8s-cluster",
                  label:  "クラスターの停止"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/start-k8s-cluster",
                  label:  "クラスターの起動"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/changing-cluster-configuration",
                  label:  "クラスター構成の変更"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/change-nodes-configuration",
                  label:  "Nodes 構成の変更"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/change-nfs-server-configuration",
                  label:  "NFS Server 構成の変更"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nodes",
                  label:  "Nodes ストレージサイズの拡張"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/increase-storage-size-of-nfs-server",
                  label:  "NFS Server ストレージサイズの拡張"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/nang-cap-k8s-version",
                  label:  "Kubernetes バージョンのアップグレード"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/upgrading-k8s-version",
                  label:  "K8s バージョンのアップグレード"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/add-nfs-storage",
                  label:  "NFS Persistent Storage の追加"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/auto-scale",
                  label:  "Autoscale"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/load-balancer-services",
                  label:  "Service Type Load-Balancer"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/advanced-firewall",
                  label:  "Advanced Firewall"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/backup-restore-cluster",
                  label:  "Cluster のバックアップとリストア"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/best-practice-upgrade-version",
                  label:  "バージョンアップグレード ベストプラクティス"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/fke-usage-notes",
                  label:  "FKE 使用上の注意事項"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/notes-when-using-dfke",
                  label:  "FKE 使用時の注意事項"
                },
                {
                  type:  "doc",
                  id:  "dedicated-fpt-kubernetes-engine/faqs",
                  label:  "よくある質問"
                }
              ]
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/manual-scale",
              label:  "Manual Scale"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/best-practice-manual-scaling",
              label:  "Manual Scaling ベストプラクティス"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/persistent-storage",
              label:  "Persistent Storage"
            },
            {
              type:  "doc",
              id:  "dedicated-fpt-kubernetes-engine/auto-repair-nodes",
              label:  "Auto Repair Nodes"
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
              id:  "gpu-container/about-gpu-container",
              label:  "About Gpu Container"
            },
            {
              type:  "doc",
              id:  "gpu-container/quick-start",
              label:  "Sign Up for an..."
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
              id:  "gpu-virtual-machine-en/概要",
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/初期-設定",
              label:  "初期 設定"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/クイック-スタート",
              label:  "クイック スタート"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/サブネット-の-作成",
              label:  "サブネット の 作成"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/GPU-VM -インスタンス-の-作成",
              label:  "Gpu Vm インスタンス の..."
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/IPアドレス（フローティングIP）の割り当て",
              label:  "Ipアドレス（フローティングIp）の割り当て"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/セキュリティグループの作成",
              label:  "セキュリティグループの作成"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/サーバーへのアクセス",
              label:  "サーバーへのアクセス"
            },
            {
              type:  "doc",
              id:  "gpu-virtual-machine-en/に関するよくある質問",
              label:  "一般"
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
              id:  "managed-gpu-cluster-kubernetes-ja/初期設定",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/Managed-GPU ク-ラ-ス-タ-ー-の-管-理",
              label:  "Managed GPU Cluster (Kubernetes)"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/新-し-い- Managed-GPU -ク-ラ-ス-タ-ー-を-起-動",
              label:  "新 し い Managed..."
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/作成済みの Managed GPU クラスターの一覧を表示",
              label:  "作成済みの Managed Gpu クラスターの一覧を表示"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/クラスターのアクセス情報を取得",
              label:  "クラスターのアクセス情報を取得"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/Managed GPU クラスターを削除",
              label:  "Managed Gpu クラスターを削除"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/K8S クラスターの構成を変更",
              label:  "Managed GPU Cluster (Kubernetes)"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループを追加",
              label:  "ワーカーグループを追加"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/マニュアルスケール機能",
              label:  "マニュアルスケール機能"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのラベル-汚染を編集",
              label:  "ワーカーグループのラベル 汚染を編集"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/ワーカーグループのベース切り替え機能",
              label:  "Managed GPU Cluster (Kubernetes)"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/サービス種別：ロードバランサー",
              label:  "サービス種別：ロードバランサー"
            },
            {
              type:  "doc",
              id:  "managed-gpu-cluster-kubernetes-ja/Ollama と Open WebUI を使用した DeepSeek-R1 モデルのデプロイ",
              label:  "Ollama と Open Webui..."
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
              id:  "metal-cloud-ja/概要",
              label:  "**Metal Cloud とは**"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/クイックスタート",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/サーバーの作成",
              label:  "サーバーの作成"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/Metal Cloud OS and Images",
              label:  "カスタムイメージ"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/Metal Cloud RAID",
              label:  "RAID 定義"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/ユーザーデータ",
              label:  "ユーザーデータ"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/サーバーアクション",
              label:  "サーバーの電源オンとオフ"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/アクセスサーバー",
              label:  "コンソール KVM"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/サブネット",
              label:  "サブネットの作成。"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/ネットワーク ACL",
              label:  "ネットワーク ACL の概要"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/監視サーバー",
              label:  "監視サーバー"
            },
            {
              type:  "doc",
              id:  "metal-cloud-ja/FAQ",
              label:  "一般"
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
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "iam/role-management",
              label:  "Role管理"
            },
            {
              type:  "doc",
              id:  "iam/user-group-management",
              label:  "User Group管理"
            },
            {
              type:  "doc",
              id:  "iam/iam-user-management",
              label:  "IAM User管理"
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
                  id:  "iam/ip-access-overview",
                  label:  "IP Access概要"
                },
                {
                  type:  "doc",
                  id:  "iam/delete-ip-access",
                  label:  "IP Accessレコードの削除"
                },
                {
                  type:  "doc",
                  id:  "iam/download-access-log",
                  label:  "アクセス履歴一覧のダウンロード"
                },
                {
                  type:  "doc",
                  id:  "iam/iam",
                  label:  "概要"
                },
                {
                  type:  "doc",
                  id:  "iam/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "iam/role-overview",
                  label:  "Role概要"
                },
                {
                  type:  "doc",
                  id:  "iam/view-role-list",
                  label:  "Role一覧の表示"
                },
                {
                  type:  "doc",
                  id:  "iam/create-role",
                  label:  "Roleの作成と権限設定"
                },
                {
                  type:  "doc",
                  id:  "iam/view-role-detail",
                  label:  "Role詳細の表示"
                },
                {
                  type:  "doc",
                  id:  "iam/edit-role-and-permissions",
                  label:  "RoleとPermissionの編集"
                },
                {
                  type:  "doc",
                  id:  "iam/delete-role",
                  label:  "Roleの削除"
                },
                {
                  type:  "doc",
                  id:  "iam/user-group-overview",
                  label:  "User Group概要"
                },
                {
                  type:  "doc",
                  id:  "iam/create-user-group",
                  label:  "新しいUser Groupの作成"
                },
                {
                  type:  "doc",
                  id:  "iam/view-list-user-group",
                  label:  "User Group一覧の表示"
                },
                {
                  type:  "doc",
                  id:  "iam/view-detail-user-group",
                  label:  "User Group詳細の表示"
                },
                {
                  type:  "doc",
                  id:  "iam/edit-user-group",
                  label:  "User Groupの編集"
                },
                {
                  type:  "doc",
                  id:  "iam/delete-user-group",
                  label:  "User Groupの削除"
                },
                {
                  type:  "doc",
                  id:  "iam/iam-user-overview",
                  label:  "IAM User概要"
                },
                {
                  type:  "doc",
                  id:  "iam/invite-iam-user",
                  label:  "新しいIAM Userの招待"
                },
                {
                  type:  "doc",
                  id:  "iam/create-account-access-vpc",
                  label:  "アカウントの作成とVPCアクセス"
                },
                {
                  type:  "doc",
                  id:  "iam/change-password",
                  label:  "パスワードの変更"
                },
                {
                  type:  "doc",
                  id:  "iam/configure-2fa",
                  label:  "2FAの設定"
                },
                {
                  type:  "doc",
                  id:  "iam/create-ip-access",
                  label:  "新しいIP Accessレコードの作成"
                },
                {
                  type:  "doc",
                  id:  "iam/ip-access-activity-log",
                  label:  "アクティビティログの確認"
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
                  label:  "概要"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/detection-status",
                  label:  "Detection Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/system-status",
                  label:  "System Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/service-status",
                  label:  "Service Status"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/load-balancing",
                  label:  "設定された各プロキシに対応する宛先ロードバランサーの状態統計"
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
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/export-list",
                  label:  "Export List"
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
                      label:  "SSL プロファイルの保存と表示"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters",
                      label:  "ネットワーク設定（セキュリティグループに相当）"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/network-filters-scheduling",
                      label:  "ネットワークフィルター内のセキュリティグループのスケジュール設定"
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
                      label:  "X-Forwarded-For"
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
                      id:  "fpt-cloud-wapples/web-access-management",
                      label:  "Web Access Management"
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
                  id:  "fpt-cloud-wapples/detection-exceptions",
                  label:  "Detection Exceptions"
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
                      id:  "fpt-cloud-wapples/error-handling",
                      label:  "Error Handling"
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
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/snort",
                      label:  "Snort"
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
              type:  "category",
              label:  "Reports",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/report-generation",
                  label:  "Report Generation"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/report-list",
                  label:  "Report List"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/report-scheduling",
                  label:  "Report Scheduling"
                }
              ]
            },
            {
              type:  "category",
              label:  "設定",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Operations",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/accounts",
                      label:  "Accounts"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/audit-level",
                      label:  "Audit Level"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/smtp",
                      label:  "Smtp"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/self-diagnostics",
                      label:  "システム状態およびネットワーク状態の警告管理"
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
                      id:  "fpt-cloud-wapples/backup-list",
                      label:  "Backup List"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/automatic-backup",
                      label:  "Automatic Backup"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-wapples/backup-restore",
                      label:  "Backup Restore"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/intergration",
                  label:  "サードパーティとの統合設定情報"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/network",
                  label:  "WAPPLESのインバウンド・アウトバウンドネットワーク管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-wapples/system",
                  label:  "System"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Targetの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/quan-ly-target",
                      label:  "ターゲット管理"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/tao-target",
                      label:  "ターゲットを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/kiem-tra-trang-thai-target",
                      label:  "ターゲットのスキャンステータスを確認する"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/update-target",
                      label:  "3. scan Target の設定変更"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/scan-now",
                      label:  "Scan now"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xoa-target",
                      label:  "5. Target の削除"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-header",
                      label:  "6. scan target 作成時の Web Header 取得"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/lay-cookie",
                      label:  "7. scan target 作成時の Web Cookie 取得"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/mo-remote-registry-window",
                      label:  "8. Windows Remote Registry の有効化（SMB 用）"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "スキャン結果の確認",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet",
                      label:  "スキャン結果の表示"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/dashboard-ket-qua-quet",
                      label:  "1. スキャン結果ダッシュボードへのアクセス"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-chi-tiet-ket-qua-quet",
                      label:  "2. スキャン結果の詳細表示"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/xem-ket-qua-quet-cu",
                      label:  "3. 過去のスキャン結果の表示"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-va/fpt-va",
                      label:  "FPT Cloud VA"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-va/xuat-bao-cao",
                  label:  "レポートのエクスポート"
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
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/truy-cap-giao-dien-quan-tri",
                  label:  "管理インターフェースへのアクセス"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-network-interfaces",
                  label:  "Network Interfaces の設定"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/cau-hinh-static-routes",
                  label:  "Static Routes の設定"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-firewall-policy",
                  label:  "Firewall Policy の作成"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/xoa-firewall-policy",
                  label:  "Firewall Policy の削除"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/tao-security-profile",
                  label:  "Security Profile の作成"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/quan-ly-system-user-user-profile",
                  label:  "System User – User Profile の管理"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/feature-visibility",
                  label:  "Fortigate NGFW の機能の有効・無効化。System > Feature Visibility"
                },
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/hien-thi-logs-traffic",
                  label:  "Logs Traffic の表示"
                }
              ]
            },
            {
              type:  "category",
              label:  "よくある質問",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fortigate-fpt-ngfw/FAQ",
                  label:  "よくある質問"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "ddos-protection/create-ddos",
                  label:  "DDoS保護の作成"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/monitor-ip",
                  label:  "保護中のIPの監視"
                },
                {
                  type:  "doc",
                  id:  "ddos-protection/ddos-protection",
                  label:  "DDoS保護"
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
              label:  "Gaia Portal ガイド",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/huong-dan-tren-gaia-portal",
                  label:  "Gaia Portalでの操作ガイド"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-gaia-portal",
                  label:  "Gaia Portalへのアクセス"
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
                  label:  "DNSの設定"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/update-hotfix",
                  label:  "ホットフィックスの適用"
                }
              ]
            },
            {
              type:  "category",
              label:  "SmartConsole ガイド",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/huong-dan-tren-smartconsole",
                  label:  "SmartConsoleでの操作ガイド"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/truy-cap-smartconsole",
                  label:  "SmartConsoleへのアクセス"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/install-policy",
                  label:  "Install Policy"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-object",
                  label:  "オブジェクトの作成"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-firewall",
                  label:  "ファイアウォールルールの作成"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/tao-rule-nat",
                  label:  "NATルールの作成"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/dieu-tra-log",
                  label:  "ログの調査"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-blades",
                  label:  "Bladesの管理"
                },
                {
                  type:  "doc",
                  id:  "checkpoint-fpt-ngfw/quan-ly-account",
                  label:  "アカウントの管理"
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
              id:  "fpt-cloud-waf/fpt-cloud-waf",
              label:  "FPT Cloud WAF"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/create-a-new-waf-server",
              label:  "WAFサーバーの追加"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/log-in-to-waf-dashboard",
              label:  "WAF dashboardへのログイン"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/configure-waf-server-connection",
              label:  "WAFサーバー接続の設定"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/tutorials-create-a-new-waf-server",
              label:  "WAFサーバーの追加"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/update-information-of-the-WAF-server",
              label:  "WAFサーバーの編集"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/delete-waf-server",
              label:  "WAFサーバーの削除"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/tutorials-log-in-to-waf-dashboard",
              label:  "WAF dashboardへのログイン"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/monitor-waf-server-with-dashboard-overview",
              label:  "Dashboard OverviewでWAFを監視する"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-proxy-host",
              label:  "Proxy hostの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/create-proxy-host",
              label:  "Proxy hostの作成"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/view-proxy-host-detail",
              label:  "Proxy host詳細の表示"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/update-proxy-host",
              label:  "Proxy hostの更新"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/enable-disable-proxy-host",
              label:  "Proxy hostの有効化/無効化"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/delete-proxy-host",
              label:  "Proxy hostの削除"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-redirection-host",
              label:  "Redirection hostの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-stream-host",
              label:  "Stream hostの追加"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-404-host",
              label:  "404 hostの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-access-list",
              label:  "Access listの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-ssl-certificate",
              label:  "SSL certificateの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/manage-security-rule-set",
              label:  "Security rule setの管理"
            },
            {
              type:  "doc",
              id:  "fpt-cloud-waf/quan-ly-nguoi-dung-cua-waf-dashboard",
              label:  "WAF Dashboardのユーザー管理"
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
              label:  "FPT Monitoring – IP アクセス制御"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
              label:  "アカウント作成とログイン"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/gioi-thieu-chung",
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/truy-cap-tinh-nang",
              label:  "機能へのアクセス"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quan-li-danh-sach-whitelisted-ip",
              label:  "ホワイトリストの管理"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip",
              label:  "ホワイトリストの表示"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/them-moi-whitelisted-ip",
              label:  "ホワイトリスト IP を追加する"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/xoa-whitelisted-ip",
              label:  "ホワイトリスト IP を削除する"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/retry-ip",
              label:  "IP の再試行"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/quy-tac-he-thong",
              label:  "システムルール"
            },
            {
              type:  "doc",
              id:  "fpt-monitoring-ip-access-control/lien-he-ho-tro",
              label:  "サポートへのお問い合わせ"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "reporting/tich-hop-dich-vu",
                  label:  "サービス連携"
                },
                {
                  type:  "doc",
                  id:  "reporting/tao-report",
                  label:  "レポートの作成"
                },
                {
                  type:  "doc",
                  id:  "reporting/test-send-email",
                  label:  "テスト送信メール"
                },
                {
                  type:  "doc",
                  id:  "reporting/view-detail",
                  label:  "レポート詳細の表示"
                },
                {
                  type:  "doc",
                  id:  "reporting/edit-report",
                  label:  "レポートの編集"
                },
                {
                  type:  "doc",
                  id:  "reporting/delete-report",
                  label:  "レポートの削除"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/kich-hoat-dich-vu-fcmon",
                  label:  "FPT Cloud Monitoring を有効化する"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/xem-danh-sach-workspaces",
                  label:  "ワークスペース一覧を表示する"
                },
                {
                  type:  "category",
                  label:  "3. Workspaceの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/quan-ly-workspace",
                      label:  "ワークスペースを管理する"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/xem-chi-tiet-workspace",
                      label:  "ワークスペース詳細を表示する"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/configuration-tab",
                      label:  "Configuration タブ"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/add-data-tab",
                      label:  "Add Data タブ"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/user-management-tab",
                      label:  "User Management タブ"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/quota-and-package-tab",
                      label:  "Quota and Package タブ"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/user-guide-tab",
                      label:  "User Guide タブ"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-infrastructure-platform",
                  label:  "インフラとプラットフォームを監視する"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-applications",
                  label:  "アプリケーションを監視する"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/monitor-public-endpoints",
                  label:  "パブリックエンドポイントを監視する"
                },
                {
                  type:  "category",
                  label:  "7. データの可視化",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truc-quan-hoa-du-lieu",
                      label:  "データの可視化"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/truy-cap-vao-dashboard",
                      label:  "ダッシュボードにアクセスする"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-cloud-monitoring/fcmon-dashboard-template",
                      label:  "ダッシュボードテンプレート"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/alerting",
                  label:  "アラート管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/explore-data",
                  label:  "データの探索"
                },
                {
                  type:  "doc",
                  id:  "fpt-cloud-monitoring/quan-tri-user",
                  label:  "ユーザー管理"
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
                  id:  "huong-dan-su-dung-grafana/initial-setup",
                  label:  "初期セットアップ"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/khoi-tao-workspace",
                  label:  "ワークスペースの作成"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/truy-cap-grafana",
                  label:  "Grafana へのアクセス"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-template",
                  label:  "Template の統合"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-dashboard-template",
                  label:  "Dashboard の統合"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-alert-rule-template",
                  label:  "Alert Rule の統合"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-kubernetes",
                  label:  "Monitoring K8S"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s",
                  label:  "K8s の統合"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-metric",
                  label:  "Metric 情報の確認"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-logs",
                  label:  "Logs 情報の確認"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-trace",
                  label:  "Trace 情報の確認"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/query-metric-data",
                  label:  "Grafana での metric data query の自作方法ガイド"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tich-hop-monitoring-database",
                  label:  "Monitoring Database"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/huong-dan-tich-hop-database",
                  label:  "Database の統合"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/xem-thong-tin-monitor",
                  label:  "Monitor 情報の確認"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/alerting",
                  label:  "8. アラート管理（Alerting）"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/tao-alert-rule",
                  label:  "Alert Rule の作成"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/contact-point",
                  label:  "1. Telegram bot の設定方法"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/usage",
                  label:  "使用量の確認"
                },
                {
                  type:  "doc",
                  id:  "huong-dan-su-dung-grafana/cau-hoi-thuong-gap",
                  label:  "よくある質問"
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
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "cloud-guard/Initial-Setup",
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "Alertの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-virtual-machine",
                      label:  "Virtual Machine のアラートを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-object-storage",
                      label:  "Object Storage のアラートを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-load-balancer",
                      label:  "Load Balancer のアラートを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-canh-bao-vpn",
                      label:  "VPN site-to-site のアラートを作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-activity-alert",
                      label:  "Activity Alert を作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/khoi-tao-mot-alert-moi-threat-alert",
                      label:  "Threat Alert を作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/kiem-tra-trang-thai-cua-alert",
                      label:  "アラートのステータスを確認する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/bat-tat-alert",
                      label:  "アラートを有効化・無効化する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-alert",
                      label:  "アラートを編集する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-alert",
                      label:  "アラートを削除する"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Recipientの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "cloud-guard/Recipient-la-gi",
                      label:  "受信者とは？"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/tao-moi-recipient",
                      label:  "受信者を作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/recipient-teams",
                      label:  "Microsoft Teams で受信者を作成する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/chinh-sua-recipient",
                      label:  "受信者を編集する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/xoa-recipient",
                      label:  "受信者を削除する"
                    },
                    {
                      type:  "doc",
                      id:  "cloud-guard/cloud-guard",
                      label:  "FPT Cloud Guard"
                    }
                  ]
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
                  label:  "紹介"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-dashboard",
                  label:  "ダッシュボード概要"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-security",
                  label:  "セキュリティの問題"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-cost-optimization",
                  label:  "コスト最適化の問題"
                },
                {
                  type:  "doc",
                  id:  "cloud-advisor/cloud-advisor-fault-tolerance",
                  label:  "フォールトトレランスの問題"
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
              label:  "Incident Management"
            },
            {
              type:  "doc",
              id:  "incident-management/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "incident-management/configure-integrations",
              label:  "Integration の設定"
            },
            {
              type:  "doc",
              id:  "incident-management/incoming-webhook",
              label:  "Incoming webhook"
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
              id:  "incident-management/configure-incident-settings",
              label:  "Settings の設定"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-label",
              label:  "Incident label"
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
              id:  "incident-management/create-incident",
              label:  "インシデントの作成"
            },
            {
              type:  "doc",
              id:  "incident-management/declare-incident",
              label:  "インシデントの直接宣言"
            },
            {
              type:  "doc",
              id:  "incident-management/create-incident-via-webhook",
              label:  "Incoming webhook経由で作成"
            },
            {
              type:  "doc",
              id:  "incident-management/manage-incidents",
              label:  "インシデントの管理"
            },
            {
              type:  "doc",
              id:  "incident-management/filter-incidents",
              label:  "インシデントの検索とフィルタリング"
            },
            {
              type:  "doc",
              id:  "incident-management/view-incident-detail",
              label:  "インシデントの詳細表示"
            },
            {
              type:  "doc",
              id:  "incident-management/post-incident-activity",
              label:  "対応活動の記録"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-status",
              label:  "インシデントステータスの変更"
            },
            {
              type:  "doc",
              id:  "incident-management/change-the-incident-severity",
              label:  "影響度の変更"
            },
            {
              type:  "doc",
              id:  "incident-management/copy-activities-as-markdown",
              label:  "Activity logのMarkdownエクスポート"
            },
            {
              type:  "doc",
              id:  "incident-management/incident-data-visualization",
              label:  "インシデントデータの可視化"
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
              label:  "サービス詳細"
            },
            {
              type:  "category",
              label:  "チュートリアル",
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/quan-ly-backup-job",
                  label:  "バックアップジョブの管理"
                },
                {
                  type:  "doc",
                  id:  "backup/restore-lai-vm-tu-cac-restore-point",
                  label:  "リストアポイントからVMを復元する"
                },
                {
                  type:  "doc",
                  id:  "backup/clone-vm-tu-cac-restore-point",
                  label:  "リストアポイントから新しいVMを作成する"
                },
                {
                  type:  "doc",
                  id:  "backup/xem-lich-su-backup-and-recovery",
                  label:  "バックアップ＆リカバリー履歴"
                },
                {
                  type:  "doc",
                  id:  "backup/kiem-tra-thong-tin-backup-va-restore-cua-vm",
                  label:  "VMのバックアップとリストア情報を確認する"
                },
                {
                  type:  "doc",
                  id:  "backup/backup-report",
                  label:  "バックアップレポート"
                },
                {
                  type:  "doc",
                  id:  "backup/backup-volume",
                  label:  "バックアップVolume"
                }
              ]
            },
            {
              type:  "category",
              label:  "よくある質問",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "backup/toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud",
                  label:  "バックアップのサポート内容は？"
                },
                {
                  type:  "doc",
                  id:  "backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung",
                  label:  "増分バックアップとは？"
                },
                {
                  type:  "doc",
                  id:  "backup/tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao",
                  label:  "リストアポイントが設定より多いのはなぜ？"
                },
                {
                  type:  "doc",
                  id:  "backup/toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong",
                  label:  "バックアップのトライアルポリシーはありますか？"
                },
                {
                  type:  "doc",
                  id:  "backup/backup",
                  label:  "バックアップ"
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
          label:  "FPT Jenkins CI",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-jenkins-ci/Initial-setup",
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/kiem-tra-thong-tin-goi-dich-vu",
                  label:  "サービスパッケージ情報の確認"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/tao-moi-fpt-jenkinsCI",
                  label:  "FPT Jenkins CI の新規作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xem-thong-tin-chi-tiet-jenkins-CI-instance",
                  label:  "Jenkins CI インスタンスの詳細確認"
                },
                {
                  type:  "category",
                  label:  "FPT Cloud Agentの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-fpt-cloud-agent",
                      label:  "FPT Cloud Agent の管理"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-agent",
                      label:  "エージェントの新規追加"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-thong-tin-cau-hinh-agent",
                      label:  "エージェント設定の更新"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-agent-khi-khong-muon-su-dung",
                      label:  "エージェントの削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "Credentialの管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-credential",
                      label:  "クレデンシャルの管理"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/them-moi-mot-credential",
                      label:  "クレデンシャルの新規追加"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cap-nhat-mot-credential",
                      label:  "クレデンシャルの更新"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/xoa-mot-credential",
                      label:  "クレデンシャルの削除"
                    }
                  ]
                },
                {
                  type:  "category",
                  label:  "設定の管理",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/quan-ly-cau-hinh",
                      label:  "設定の管理"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-email-notifications",
                      label:  "メール通知の設定"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-sonarqube-servers",
                      label:  "SonarQube サーバーの設定"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/cau-hinh-telegram-bots",
                      label:  "Telegram Bot の設定"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/upgrade-version",
                  label:  "Jenkins バージョンのアップグレード"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/nang-cap-goi-dich-vu",
                  label:  "サービスパッケージのアップグレード"
                },
                {
                  type:  "doc",
                  id:  "fpt-jenkins-ci/xoa-jenkins-instance-khi-khong-muon-su-dung",
                  label:  "Jenkins インスタンスの削除"
                },
                {
                  type:  "category",
                  label:  "Demo",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/demo",
                      label:  "デモ"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-dang-nhap-vao-fpt-cloud-jenkins-ci",
                      label:  "FPT Cloud Jenkins CI へのログイン"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent",
                      label:  "FPT Cloud Agent でジョブを作成"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins",
                      label:  "Jenkins ビルドノードの設定"
                    },
                    {
                      type:  "doc",
                      id:  "fpt-jenkins-ci/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal",
                      label:  "Jenkins CI/CD パイプラインの作成"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Webhookの設定",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/edit-webhook-secret",
                  label:  "Webhook secretの編集"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/delete-webhook-secret",
                  label:  "Webhook secretの削除"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-argocd/upgrade-version",
              label:  "ArgoCDバージョンのアップグレード"
            },
            {
              type:  "category",
              label:  "ArgoCD上のアカウント管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-argocd/edit-capabilities",
                  label:  "Capabilitiesの編集"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/change-password",
                  label:  "アカウントパスワードの変更"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-account",
                  label:  "アカウントのenable/disable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/update-admin-password",
                  label:  "Adminパスワードの更新"
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
                  label:  "AdminとAnonymous userの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-anonymous-user",
                  label:  "Anonymous userのenable/disable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-admin-user",
                  label:  "Adminアカウントのenable/disable"
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
                  id:  "fpt-argocd/initial-setup",
                  label:  "初期設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/check-service-package-info",
                  label:  "サービスパッケージ情報の確認"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/create-fpt-argocd",
                  label:  "FPT ArgoCD instanceの新規作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/view-argocd-detail",
                  label:  "詳細の確認とログイン"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/add-cluster-to-argocd",
                  label:  "Kubernetes clusterを接続します"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-image-updater",
                  label:  "Image Updaterの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-images-updater",
                  label:  "Image Updaterのenable/disable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-log-level",
                  label:  "ログレベルの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-secrets",
                  label:  "Secretの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-registry-secrets",
                  label:  "Registry secretの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-container-registry",
                  label:  "Container registryの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-webhook",
                  label:  "Webhookの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/add-webhook-secret",
                  label:  "Webhook secretの追加"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-build-options-kustomize",
                  label:  "KustomizeのBuild options設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-timereconcile",
                  label:  "TimeReconcileの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-rbac",
                  label:  "RBAC policyの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-whitelist-ip",
                  label:  "IPホワイトリストの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/upgrade-service-package",
                  label:  "サービスパッケージのアップグレード"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-accounts",
                  label:  "ArgoCDアカウントの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/create-account",
                  label:  "新しいアカウントの作成"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/manage-admin-account",
                  label:  "Adminアカウントの管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-oidc-sso",
                  label:  "SSO用のOIDC設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-oidc",
                  label:  "OIDCのenable/disable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-oidc-config",
                  label:  "OIDC configの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/update-oidc-config",
                  label:  "OIDC configの更新"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/delete-oidc-config",
                  label:  "OIDC configの削除"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-applications-set",
                  label:  "ApplicationSetのenable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-notifications",
                  label:  "Notificationsの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/enable-disable-notifications",
                  label:  "Notificationsのenable/disable"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-notification-channels",
                  label:  "通知チャンネルの設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-argocd/configure-webhook-with-secret",
                  label:  "Webhook secretを使用したWebhookの設定"
                }
              ]
            }
          ]
        },
        {
          type:  "category",
          label:  "FPT Key Vault",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "fpt-key-vault/fpt-key-vault",
              label:  "FPT Key Vault"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Vault-Instance",
              label:  "Vault Instanceを作成する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/secret-engine-management",
              label:  "Secret Engine管理"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Secret-Engine",
              label:  "Secret Engineを作成する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Delete-Secret-Engine",
              label:  "Secret Engineを削除する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/secret-management",
              label:  "Secret管理"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Secret-in-Secret-Engine",
              label:  "Secret EngineにSecretを作成する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/View-and-Update-Secret-information",
              label:  "Secret情報を表示・更新する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Delete-Secret",
              label:  "Secretを削除する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/policy-management",
              label:  "Policy管理"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Policy",
              label:  "Policyを作成する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Delete-Policy",
              label:  "Policyを削除する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/auth-method-management",
              label:  "Auth Method管理"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Auth-Method",
              label:  "Auth Methodを作成する"
            },
            {
              type:  "doc",
              id:  "fpt-key-vault/Create-Role",
              label:  "Roleを作成する"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "チュートリアル",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-api-management/analytics",
                  label:  "Analytics"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/quick-starts",
                  label:  "クイックスタート"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/registering-on-fpt-portal",
                  label:  "FPT Portal でのサービス登録"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/declaring-information",
                  label:  "ApiManager Application での情報設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/manage-rest-apis",
                  label:  "REST API の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/managing-products",
                  label:  "Product の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/managing-sites",
                  label:  "API Site の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/managing-consumers",
                  label:  "Consumer の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-api-management/consumer-api-usage-guide",
                  label:  "API Consumer 向け利用ガイド"
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
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/tao-api-gateway",
              label:  "API Gatewayの作成"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xem-thong-tin-api-gateway",
              label:  "API Gatewayの詳細確認"
            },
            {
              type:  "doc",
              id:  "fpt-api-gateway/xoa-api-gateway",
              label:  "API Gatewayの削除"
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
              id:  "fpt-app-catalogs/initial-setup",
              label:  "初期セットアップ"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/create-a-new-fpt-app-catalogs",
              label:  "新しい App Catalog を作成する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-app-catalog-details",
              label:  "App Catalog の詳細を表示する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/add-cluster-to-app-catalogs-management",
              label:  "クラスターを App Catalogs Management に追加する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/manage-app-catalogs",
              label:  "App Catalogs の管理"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/search-app-catalogs-from-a-repository",
              label:  "リポジトリから App Catalog を検索する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/deploy-app-catalogs-to-cluster",
              label:  "クラスターへ App Catalog をデプロイする"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/manage-deployed-applications",
              label:  "デプロイ済みアプリケーションの管理"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/filter-deployed-appplications-by-cluster",
              label:  "クラスター別にデプロイ済みアプリをフィルタリングする"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/view-deployed-applications-details",
              label:  "デプロイ済みアプリケーションの詳細を表示する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/change-applications-configuration",
              label:  "アプリケーション設定を変更する"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/rollback-an-application-to-the-old-configuration",
              label:  "アプリケーションを旧設定にロールバックする"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/upgrade-applications-to-the-latest-version",
              label:  "アプリケーションを最新バージョンにアップグレードする"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/uninstall-applications",
              label:  "アプリケーションをアンインストールする"
            },
            {
              type:  "doc",
              id:  "fpt-app-catalogs/delete-an-app-catalogs-mangement",
              label:  "App Catalog Management を削除する"
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
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-event-gateway",
              label:  "Event Gatewayの作成"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-event-gateway",
              label:  "Event Gateway情報の確認"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-event-gateway",
              label:  "Event Gateway情報の更新"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-event-gateway",
              label:  "Event Gatewayの削除"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-security",
              label:  "セキュリティの管理"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-moi-security",
              label:  "セキュリティの作成"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-security",
              label:  "セキュリティ情報の更新"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-security",
              label:  "セキュリティの削除"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-router-group",
              label:  "Router Groupの管理"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router-group",
              label:  "Router Groupの作成"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xem-thong-tin-router-group",
              label:  "Router Group情報の確認"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router-group",
              label:  "Router Group情報の更新"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router-group",
              label:  "Router Groupの削除"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/quan-ly-router",
              label:  "Routerの管理"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/tao-router",
              label:  "Routerの作成"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/cap-nhat-thong-tin-router",
              label:  "Router情報の更新"
            },
            {
              type:  "doc",
              id:  "fpt-event-gateway/xoa-router",
              label:  "Routerの削除"
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
              id:  "fpt-kafka/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/quick-starts",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-topics",
              label:  "topicの管理"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-topics",
              label:  "topicの作成"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-topics",
              label:  "topicの表示"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-topics",
              label:  "topicの編集"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-topics",
              label:  "topicの削除"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-credentials",
              label:  "credentialの管理"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-credentials",
              label:  "credentialの作成"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/edit-credentials",
              label:  "credentialの編集"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-credentials",
              label:  "credentialの削除"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-acls",
              label:  "ACLの管理"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-acls",
              label:  "ACLの作成"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-acls",
              label:  "ACLの削除"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/manage-consumer-groups",
              label:  "consumer groupの管理"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/create-consumer-groups",
              label:  "consumer groupの作成"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/view-consumer-groups",
              label:  "consumer groupの表示"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/delete-consumer-groups",
              label:  "consumer groupの削除"
            },
            {
              type:  "doc",
              id:  "fpt-kafka/demo",
              label:  "デモ"
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
              id:  "fpt-message-bus/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Quick-Starts",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/manage-queues",
              label:  "queue の管理"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/tao-queues",
              label:  "queue の作成"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xem-queues",
              label:  "queue の表示"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/gui-nhan-message-trong-queues",
              label:  "queue でのメッセージ送受信"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/xoa-queues",
              label:  "queue の削除"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/manage-topics",
              label:  "topic の管理"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-topics",
              label:  "topic の作成"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Create-Subscriptions",
              label:  "subscription の作成"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Edit-topics",
              label:  "topic の編集"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Send-Receive-messages-in-topics",
              label:  "topic でのメッセージ送受信"
            },
            {
              type:  "doc",
              id:  "fpt-message-bus/Delete-topics",
              label:  "topic の削除"
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
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/db-proxy",
              label:  "DB proxy"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/managed-fpt-database-engine",
              label:  "Managed FPT Database Engine"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/initial-setup",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-security-groups",
              label:  "セキュリティグループの作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-floating-ip",
              label:  "floating IP の作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-subnets",
              label:  "subnet の作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/database-feature-permissions",
              label:  "Database 機能の権限設定"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/roles",
              label:  "ロールの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/provision-database-engine",
              label:  "Database Engine のプロビジョニング"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-database-engine",
              label:  "Database Engine の作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-database-engine",
              label:  "Database Engine の管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-backups",
              label:  "バックアップの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-backup-service",
              label:  "バックアップサービスの作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/update-delete-backup-job",
              label:  "バックアップジョブの更新と削除"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/update-delete-backup-service",
              label:  "バックアップサービスの更新と削除"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-restore",
              label:  "リストアの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-resources",
              label:  "リソースの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-configuration",
              label:  "Configuration の管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/process-monitoring",
              label:  "プロセスモニタリングの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-event-logs",
              label:  "イベントログの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/create-db-proxy",
              label:  "DB proxy の作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engine/manage-db-proxy",
              label:  "DB proxy の管理"
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
              label:  "FPT Database Engineの概要"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/fde-glossary",
              label:  "クラウド＆DBaaS用語集"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/database-engine-version",
              label:  "データベースエンジンバージョン"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-policy",
              label:  "バージョンポリシー"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Version-List",
              label:  "サポートバージョン一覧"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deployment-model",
              label:  "デプロイメントモデル"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/network-connectivity",
              label:  "ネットワーク接続とアクセス性"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance",
              label:  "サービスメンテナンス"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Initial-setup",
              label:  "初期セットアップ要件"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/login-console",
              label:  "FPT Console Portalへのアクセス"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/register-account",
              label:  "FPT Console Portalアカウントの登録"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/iam",
              label:  "FPT Database Engineサービスアクセス権限"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/role-management",
              label:  "ロール管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/user-group-management",
              label:  "ユーザーグループ管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/subnet",
              label:  "サブネット管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-engine-service",
              label:  "FPT Database Engineサービス管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/active-db-service",
              label:  "FPT Database Engineサービスの有効化"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/deactive-db-service",
              label:  "FPT Database Engineサービスの無効化"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-manage-operate",
              label:  "データベースのプロビジョニングと運用"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/view-db-list",
              label:  "データベース一覧の表示"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/create-db",
              label:  "データベースの作成"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-view-detail",
              label:  "データベース詳細の表示"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-connect",
              label:  "データベースへの接続"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-operation",
              label:  "データベースの運用"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/upgrade-version",
              label:  "データベースバージョンのアップグレード"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-restore",
              label:  "バックアップの種類"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-mgmt",
              label:  "バックアップサービスの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/backup-job-mgmt",
              label:  "バックアップジョブの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/on-off-pitr",
              label:  "PITRの有効化/無効化"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/restore-db",
              label:  "データベースの復元"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/push-s3",
              label:  "バックアップデータのS3へのプッシュ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/resource",
              label:  "データベースクラスターリソースの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/parameter",
              label:  "パラメーターの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/kafka-user",
              label:  "Apache Kafka - Kafka ACLの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/db-proxy",
              label:  "DB Proxyの管理"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/vertical-scaling",
              label:  "垂直スケーリング"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/maintenance-window",
              label:  "メンテナンスウィンドウ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/notification",
              label:  "通知の設定"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/monitoring",
              label:  "モニタリング"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/log",
              label:  "イベントログ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/reporting",
              label:  "レポーティング"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-export",
              label:  "手動レポートエクスポート"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/report-schedule",
              label:  "自動レポートスケジューリング"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/benchmark-sysbench",
              label:  "Sysbenchベンチマーク結果"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/mysql-troubleshooting",
              label:  "エラーカタログ"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/Migration-cho-SQLServer",
              label:  "SQL Serverのマイグレーション"
            },
            {
              type:  "doc",
              id:  "managed-fpt-database-engines-new/clickhouse-use-ha",
              label:  "ClickHouseの高可用性FAQ"
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
          type:  "category",
          label:  "Trellix Customer Guide",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "trellix-customer-guide/Access the administration interface",
              label:  "管理インターフェースへのアクセス"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/setting-agert",
              label:  "agent インストールパッケージの作成"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/client-task-mapping",
              label:  "クライアントタスクの管理"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/report-guide",
              label:  "レポートの表示"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/Viewing Logs",
              label:  "ログの表示"
            },
            {
              type:  "doc",
              id:  "trellix-customer-guide/trellix-customer-guide",
              label:  "Trellix カスタマーガイド"
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
              label:  "初期設定"
            },
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/create-request-resource",
                  label:  "リソースリクエストの作成"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/view-request-resource",
                  label:  "提出済みリクエストの確認"
                }
              ]
            },
            {
              type:  "category",
              label:  "よくある質問",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-1",
                  label:  "同時に複数のリクエストを作成できますか？"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-2",
                  label:  "FCIが私のリクエストを受信したことをどうやって確認できますか？"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-3",
                  label:  "サービスのリクエスト時にVPCを選択または新規作成できますか？"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-4",
                  label:  "メニューにRequest Resourceセクションが見つからないのはなぜですか？"
                },
                {
                  type:  "doc",
                  id:  "end-user-request-resource/fqas-5",
                  label:  "Submitをクリックしてチケットを送信できないのはなぜですか？"
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
          label:  "Bills",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "クイックスタート",
              collapsed:  true,
              items:  [
                {
                  type:  "category",
                  label:  "請求期間別の照合確認",
                  collapsed:  true,
                  items:  [
                    {
                      type:  "doc",
                      id:  "billing/view-bills",
                      label:  "請求期間別の請求照合を確認する"
                    },
                    {
                      type:  "doc",
                      id:  "billing/view-bill-charges-by-service",
                      label:  "サービス別の請求明細を確認する"
                    },
                    {
                      type:  "doc",
                      id:  "billing/view-bill-charges-by-resource",
                      label:  "リソース別の請求明細を確認する"
                    }
                  ]
                },
                {
                  type:  "doc",
                  id:  "billing/download-bills",
                  label:  "詳細照合ファイルをダウンロードする"
                },
                {
                  type:  "doc",
                  id:  "billing/billing-permission",
                  label:  "billing閲覧権限の設定"
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
                  label:  "請求書が表示されないのはなぜですか？"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-2",
                  label:  "現在の請求期間のデータは最後にいつ更新されましたか？"
                },
                {
                  type:  "doc",
                  id:  "billing/fqas-3",
                  label:  "同じ請求期間に複数の照合エントリがあるのはなぜですか？"
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
              id:  "budget-alert/予算アラート",
              label:  "予算アラート"
            },
            {
              type:  "doc",
              id:  "budget-alert/initiating-a-budget-alert",
              label:  "予算アラートの作成"
            },
            {
              type:  "doc",
              id:  "budget-alert/view-cost-information",
              label:  "コスト情報とアラート履歴の確認"
            },
            {
              type:  "doc",
              id:  "budget-alert/pause-budget-alert",
              label:  "予算アラートの一時停止"
            },
            {
              type:  "doc",
              id:  "budget-alert/edit-budget-alert",
              label:  "予算アラートの編集"
            },
            {
              type:  "doc",
              id:  "budget-alert/delete-budget-alert",
              label:  "予算アラートの削除"
            },
            {
              type:  "doc",
              id:  "budget-alert/setting-budget-alert",
              label:  "しきい値到達時のリソース作成制限"
            }
          ]
        },
        {
          type:  "category",
          label:  "Cost Explorer",
          collapsed:  true,
          items:  [
            {
              type:  "doc",
              id:  "cost-explorer/コストエクスプローラー",
              label:  "コストエクスプローラー"
            },
            {
              type:  "doc",
              id:  "cost-explorer/View-dashboards-and-specific-costs-by-service",
              label:  "サービス別のコストを確認"
            },
            {
              type:  "doc",
              id:  "cost-explorer/customer-filter",
              label:  "リソースタイプ別のコストを確認"
            },
            {
              type:  "doc",
              id:  "cost-explorer/質問-1",
              label:  "コストエクスプローラーを確認できない"
            },
            {
              type:  "doc",
              id:  "cost-explorer/質問-2",
              label:  "特定リソースでフィルタリング"
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
              label:  "1. 概要"
            },
            {
              type:  "doc",
              id:  "fpt-appsec/aspm_v1.2.1",
              label:  "1. 概要"
            }
          ]
        },
        {
          type:  "doc",
          id:  "fpt-appsec/initial-setup",
          label:  "初期設定"
        },
        {
          type:  "category",
          label:  "チュートリアル",
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
                  label:  "ダッシュボード"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-dashboard-overview",
                  label:  "ダッシュボードの指標の読み方 - Organization overview"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-issue-by-team",
                  label:  "Issue by teamグラフの読み方"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-asset-by-team",
                  label:  "Asset by teamグラフの読み方"
                }
              ]
            },
            {
              type:  "category",
              label:  "Organization管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/gioi-thieu-Organization",
                  label:  "Organization Management - 組織管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/chinh-sua-thong-tin-org",
                  label:  "組織情報の編集"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-member",
                  label:  "メンバー管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-role",
                  label:  "ロール管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-teams-org",
                  label:  "チーム管理"
                }
              ]
            },
            {
              type:  "category",
              label:  "Team管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-team",
                  label:  "Team Management - チーム管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cai-dat-team",
                  label:  "チーム設定"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/quan-ly-mem-team",
                  label:  "メンバー管理（チーム）"
                }
              ]
            },
            {
              type:  "category",
              label:  "統合管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-integration",
                  label:  "Integration Management - 連携管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-github",
                  label:  "GitHub連携の編集はOrg Adminのみ可能です"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlab",
                  label:  "GitLab連携の編集はOrg AdminとTeam Managerのみ可能です"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-gitlabserver",
                  label:  "GitLab Server連携の編集はOrg AdminとTeam Managerのみ可能です"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-fcr",
                  label:  "5. FPT Container Registry連携の無効化"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-harbor",
                  label:  "1. Robot Accountの作成 - Harbor"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/cicd-guideline",
                  label:  "ガイドライン: FSP Core ServiceのScanning APIをCI/CDパイプラインに統合する"
                }
              ]
            },
            {
              type:  "category",
              label:  "Workspace管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-workspace",
                  label:  "Workspace Management - AssetおよびIssue管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-scmasset",
                  label:  "2. Assetの概要情報の確認"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/workspace-crasset",
                  label:  "Container Registry asset（image）の基本操作ガイド"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-list",
                  label:  "Issue listでのIssueステータス変更ガイド"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/guide-change-status-issue-detail",
                  label:  "Issue detailでのIssueステータス管理ガイド"
                }
              ]
            },
            {
              type:  "category",
              label:  "スケジュール管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-appsec/create-schedule",
                  label:  "スケジュール作成ガイド"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-detail",
                  label:  "スケジュール一覧と詳細の表示ガイド"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-edit",
                  label:  "スケジュール編集ガイド"
                },
                {
                  type:  "doc",
                  id:  "fpt-appsec/schedule-delete",
                  label:  "スケジュール削除ガイド"
                }
              ]
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
          label:  "初期設定"
        },
        {
          type:  "category",
          label:  "チュートリアル",
          collapsed:  true,
          items:  [
            {
              type:  "category",
              label:  "Managed GPU Clusterの管理",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/quan-ly-managed-gpu-cluster",
                  label:  "Managed GPU Cluster の管理"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/khoi-tao-managed-gpu-cluster-moi",
                  label:  "新しいManaged GPU Clusterを作成する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xem-danh-sach-managed-gpu-cluster",
                  label:  "Managed GPU Clusterの一覧を表示する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/lay-thong-tin-truy-cap-cluster",
                  label:  "クラスターアクセス情報を取得する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/xoa-managed-gpu-cluster",
                  label:  "Managed GPU Clusterを削除する"
                }
              ]
            },
            {
              type:  "category",
              label:  "K8S Cluster設定の変更",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/thay-doi-cau-hinh-k8s",
                  label:  "K8s設定を変更する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/add-them-worker-group",
                  label:  "Worker Groupを追加する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-manual-scale-managed-gpu-cluster",
                  label:  "Managed GPU Clusterの手動スケール"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster",
                  label:  "Worker GroupのラベルとTaintを編集する"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/tinh-nang-chuyen-worker-base-managed-gpu-cluster",
                  label:  "ベースWorker Groupを変更する"
                }
              ]
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/service-load-balancer-managed-gpu-cluster",
              label:  "Managed GPU ClusterのLoad Balancerサービス"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster",
              label:  "Managed GPU Clusterにアプリケーションをデプロイする"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/file-storage-high-performance",
              label:  "File Storage High Performance統合"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/slurm-on-fpt-cloud",
              label:  "FPT CloudでのSLURM"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/vgpu-for-container",
              label:  "FPT Kubernetes EngineのvGPU機能"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/gpu-time-sharing",
              label:  "FPT Kubernetes EngineのGPU time sharing/time slicing"
            },
            {
              type:  "doc",
              id:  "fpt-managed-gpu-cluster/mps-gpu-sharing",
              label:  "MPS GPU共有"
            },
            {
              type:  "category",
              label:  "Managed GPU ClusterへのサンプルGPUワークロードのデプロイ",
              collapsed:  true,
              items:  [
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/try-example-workload",
                  label:  "サンプルGPUワークロードを試す"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/single-gpu-example",
                  label:  "シングルGPUの例：vLLMを使ったLLMの推論サービング"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-gpus-example",
                  label:  "マルチGPUの例：vLLMを使ったLLMの推論サービング"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/multi-nodes-example",
                  label:  "マルチノードの例：vLLMとマルチホストサービング"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/finetune-llm-models",
                  label:  "KubernetesでUnslothを使ってLLMモデルをファインチューニングする"
                },
                {
                  type:  "doc",
                  id:  "fpt-managed-gpu-cluster/fpt-managed-gpu-cluster",
                  label:  "FPT Managed GPU Cluster"
                }
              ]
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
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/quick-start",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/balance",
              label:  "残高"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/low-balance-threshold-alert",
              label:  "低残高アラート"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/credit-history",
              label:  "クレジット履歴"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/voucher-list",
              label:  "バウチャー一覧"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-methods",
              label:  "支払い方法"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-calculation",
              label:  "課金計算"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/gpu-container-billing",
              label:  "GPU Container 課金"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-hub-billing",
              label:  "Model Hub 課金"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/model-finetuning-billing",
              label:  "Model Fine-Tuning 課金"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/modas-billing",
              label:  "MoDaS 課金"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/add-credits",
              label:  "クレジットの追加"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/redeem-voucher",
              label:  "バウチャーの引き換え"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/payment-invoice",
              label:  "支払い請求書"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-plan",
              label:  "課金プラン"
            },
            {
              type:  "doc",
              id:  "ai-factory-billing/billing-faq",
              label:  "よくある質問（Billing FAQ）"
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
              id:  "ai-notebook/get-started-jp",
              label:  "AI Notebookについて"
            },
            {
              type:  "doc",
              id:  "ai-notebook/quick-start-jp",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "ai-notebook/lauch-jp",
              label:  "AI Notebookの起動"
            },
            {
              type:  "doc",
              id:  "ai-notebook/create-jp",
              label:  "Notebookの作成"
            },
            {
              type:  "doc",
              id:  "ai-notebook/switch",
              label:  "Kernelの接続と切り替え"
            },
            {
              type:  "doc",
              id:  "ai-notebook/shut-down-jp",
              label:  "Kernelのシャットダウン"
            },
            {
              type:  "doc",
              id:  "ai-notebook/faq-jp",
              label:  "よくある質問"
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
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/quick-start",
              label:  "クイックスタート"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/home-page",
              label:  "ホームページ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/product-information",
              label:  "製品情報"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/playground",
              label:  "Playground"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/fine-tune-with-lora",
              label:  "LoRA でファインチューニング"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deployment-lora-inference",
              label:  "LoRA 推論のデプロイ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/my-account",
              label:  "マイアカウント"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/balance",
              label:  "残高"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/billing",
              label:  "請求"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/contact-us",
              label:  "お問い合わせ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/how-to-create-an-api-key",
              label:  "API キーの作成"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/api-integration",
              label:  "API 連携"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/deprecated-models",
              label:  "廃止モデル"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/FAQ",
              label:  "FAQ"
            },
            {
              type:  "doc",
              id:  "ai_marketplace/sign-in",
              label:  "サインイン"
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
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "data-hub/create-connection",
              label:  "接続の作成"
            },
            {
              type:  "doc",
              id:  "data-hub/generate-dataset",
              label:  "データセットの生成"
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
              id:  "model-fine-tuning/concept",
              label:  "モデルの微調整"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/key-features",
              label:  "Key Features"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/faqs",
              label:  "よくある質問"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/initial-setup",
              label:  "初期設定"
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
              id:  "model-fine-tuning/training-configuration",
              label:  "Training Configuration"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/select-data-format",
              label:  "Select Data Format"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/set-hyperparameters",
              label:  "Set Hyperparameters"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/start-pipeline",
              label:  "Start Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/manage-pipeline",
              label:  "Manage Pipeline"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/view-pipeline-settings",
              label:  "モデルの微調整"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/audit-logs",
              label:  "モデルの微調整"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/view-execution-history",
              label:  "View Execution History"
            },
            {
              type:  "doc",
              id:  "model-fine-tuning/view-execution-details",
              label:  "View Execution Details"
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
              id:  "model-hub/overview",
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "model-hub/what-is-model-hub",
              label:  "Model Hub とは"
            },
            {
              type:  "doc",
              id:  "model-hub/how-does-it-work",
              label:  "仕組み"
            },
            {
              type:  "doc",
              id:  "model-hub/why-model-hub",
              label:  "Model Hub を使う理由"
            },
            {
              type:  "doc",
              id:  "model-hub/quick-start",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/sign-up-for-an-account",
              label:  "アカウントの登録"
            },
            {
              type:  "doc",
              id:  "model-hub/top-up-balance",
              label:  "残高のチャージ"
            },
            {
              type:  "doc",
              id:  "model-hub/start-using-services",
              label:  "サービスの利用開始"
            },
            {
              type:  "doc",
              id:  "model-hub/notice",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-private-model",
              label:  "Model Hub"
            },
            {
              type:  "doc",
              id:  "model-hub/create-a-model",
              label:  "model の作成"
            },
            {
              type:  "doc",
              id:  "model-hub/view-list-model-2",
              label:  "model 一覧の表示"
            },
            {
              type:  "doc",
              id:  "model-hub/view-model-details",
              label:  "model 詳細の表示"
            },
            {
              type:  "doc",
              id:  "model-hub/edit-a-model",
              label:  "model の編集"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-a-model",
              label:  "model の削除"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-create-model-version",
              label:  "model バージョンの作成"
            },
            {
              type:  "doc",
              id:  "model-hub/create-version",
              label:  "バージョンの作成"
            },
            {
              type:  "doc",
              id:  "model-hub/Edit-version",
              label:  "バージョンの編集"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-version",
              label:  "バージョンの削除"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-upload-download-files-by-sdk",
              label:  "SDK によるファイルのアップロードとダウンロード"
            },
            {
              type:  "doc",
              id:  "model-hub/upload-files",
              label:  "ファイルのアップロード"
            },
            {
              type:  "doc",
              id:  "model-hub/download-files",
              label:  "ファイルのダウンロード"
            },
            {
              type:  "doc",
              id:  "model-hub/delete-file",
              label:  "ファイルの削除"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-share-a-model",
              label:  "model の共有"
            },
            {
              type:  "doc",
              id:  "model-hub/add-share",
              label:  "共有の追加"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-model-from-other-sources-like-hugging-face",
              label:  "他のソースからの model の使用"
            },
            {
              type:  "doc",
              id:  "model-hub/how-to-use-model-catalog",
              label:  "Model Catalog の使用"
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
              label:  "概要"
            },
            {
              type:  "doc",
              id:  "model-serving/initial-set-up",
              label:  "初期設定"
            },
            {
              type:  "doc",
              id:  "model-serving/terms-definitions",
              label:  "用語と定義"
            },
            {
              type:  "doc",
              id:  "model-serving/about-fci",
              label:  "FCIについて"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-list",
              label:  "デプロイメント一覧"
            },
            {
              type:  "doc",
              id:  "model-serving/create-a-new-model-serving-deployment",
              label:  "新規デプロイメントの作成"
            },
            {
              type:  "doc",
              id:  "model-serving/deployment-configuration-information",
              label:  "デプロイメント設定"
            },
            {
              type:  "doc",
              id:  "model-serving/detailed-configuration-information",
              label:  "詳細設定"
            },
            {
              type:  "doc",
              id:  "model-serving/traffic-setting-configuration-information",
              label:  "トラフィック設定"
            },
            {
              type:  "doc",
              id:  "model-serving/status-actions-deployment",
              label:  "ステータスとアクション"
            },
            {
              type:  "doc",
              id:  "model-serving/delete-a-deployment",
              label:  "デプロイメントの削除"
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
              id:  "model-testing-interactive-sessions/overview",
              label:  "Model Testing – Interactive Sessions"
            },
            {
              type:  "doc",
              id:  "model-testing-interactive-sessions/what-is-model-testing-interactive-sessions",
              label:  "Model Testing Interactive Sessionsとは"
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
              label:  "ステップバイステップ"
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
              label:  "Model Testing – Test Jobs"
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
              label:  "ステップバイステップ"
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
              label:  "Standard Select Data Format"
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
              id:  "model-testing/model-testing",
              label:  "モデルテスト"
            },
            {
              type:  "doc",
              id:  "model-testing/definition",
              label:  "モデルテスト"
            },
            {
              type:  "doc",
              id:  "model-testing/key-features",
              label:  "Key Features"
            },
            {
              type:  "doc",
              id:  "model-testing/create-an-interactive-session",
              label:  "モデルテストサービスにアクセスし、「インタラクティブセッション」を選択し、「新しいセッションを作成」をクリックします [![file](/img/migrated/image-1746688925988.21.46-ae14f354.png)](/img/migrated/image-1746688925988.21.46-ae14f354.png)"
            },
            {
              type:  "doc",
              id:  "model-testing/test-models-response",
              label:  "Test Models Response"
            },
            {
              type:  "doc",
              id:  "model-testing/completion-history",
              label:  "Completion History"
            }
          ]
        }
      ]
    }
  ]
};
