/**
 * Rebuild Cloud Server sidebar to EXACTLY match web crawl hierarchy.
 * L3: Initial Setup, Quick Starts, Tutorials, FAQs
 * Everything else is L4/L5 inside these.
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

function buildCloudServer(lang) {
  const L = {
    vi: { qs: "Hướng dẫn nhanh (Quick Starts)", tut: "Hướng dẫn chi tiết (Tutorials)", faq: "Các câu hỏi thường gặp (FAQs)", samples: "Một số gợi ý mẫu (Samples)" },
    en: { qs: "Quick Starts", tut: "Tutorials", faq: "FAQs", samples: "Samples" },
    ja: { qs: "クイックスタート", tut: "チュートリアル", faq: "よくある質問", samples: "サンプル" },
  }[lang];

  // Prefix helper
  const cs = (id) => "cloud-server/" + id;
  const nic = (id) => "nic/" + id;
  const nat = (id) => "nat_instance/" + id;
  const gw = (id) => "gateway/" + id;
  const aa = (id) => "allow-address-pair/" + id;
  const af = (id) => "affinity-anti-affinity/" + id;
  const cn = (id) => "change-network-config/" + id;
  const nb = (id) => "notification-bell/" + id;
  const tf = (id) => "terraform/" + id;
  const ut = (id) => "user-token/" + id;
  const as = (id) => "auto-schedule-to-on-off-instance/" + id;
  const li = (id) => "lock-unlock-instance-deletion/" + id;
  const rm = (id) => "relation-management/" + id;

  return {
    type: "category", label: "Cloud Server", collapsed: true,
    items: [
      // L3: Initial Setup
      { type: "doc", id: cs("Initial-Setup") },

      // L3: Quick Starts
      { type: "category", label: L.qs, collapsed: true, items: [
        { type: "category", label: lang === "vi" ? "Tạo một máy ảo" : lang === "ja" ? "仮想マシンの作成" : "Create a Virtual Machine", collapsed: true, items: [
          { type: "doc", id: cs("quick-starts-tao-mot-may-ao") },
          { type: "doc", id: cs("create-vm-iso") },
        ]},
        { type: "doc", id: cs("clone-instance") },
        { type: "doc", id: cs("quick-starts-tatbat-may-ao") },
        { type: "doc", id: cs("quick-starts-khoi-dong-lai-may-ao") },
        { type: "doc", id: cs("lock-unlock-instance-deletion") },
        { type: "doc", id: cs("quick-starts-xoa-may-ao") },
      ]},

      // L3: Tutorials
      { type: "category", label: L.tut, collapsed: true, items: [
        { type: "category", label: lang === "vi" ? "Quản lý máy ảo" : lang === "ja" ? "仮想マシンの管理" : "Manage Virtual Machines", collapsed: true, items: [
          { type: "doc", id: cs("quan-ly-may-ao") },
          { type: "doc", id: cs("tutorials-khoi-tao-mot-may-ao-moi") },
          { type: "doc", id: cs("tutorials-ket-noi-vao-may-ao-windows") },
          { type: "doc", id: cs("tutorials-ket-noi-vao-may-ao-linux") },
          { type: "doc", id: cs("attach-a-network-card-to-the-virtual-machine") },
          { type: "doc", id: cs("remove-the-network-card-from-the-virtual-machine") },
          { type: "doc", id: cs("tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao") },
          { type: "doc", id: cs("tutorials-thay-doi-thong-tin-cau-hinh-may-chu") },
          { type: "doc", id: cs("tutorials-backup-may-chu-voi-snapshot") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý GPU với Portal Console" : lang === "ja" ? "Portal ConsoleでのGPU管理" : "Manage GPU with Portal Console", collapsed: true, items: [
          { type: "doc", id: cs("GPU") },
          { type: "doc", id: cs("gpu-general") },
          { type: "doc", id: cs("gpu-specific") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý GPU Server với HPC Portal" : lang === "ja" ? "HPC PortalでのGPU Server管理" : "Manage GPU Server with HPC Portal", collapsed: true, items: [
          { type: "doc", id: cs("quan-ly-gpu-voi-hpc-portal") },
          { type: "doc", id: cs("hpc-quick-start") },
          { type: "doc", id: cs("hpc-change-package") },
          { type: "doc", id: cs("hpc-fixed-rental") },
          { type: "doc", id: cs("hpc-snapshot-backup") },
          { type: "doc", id: cs("hpc-hardware-fixation") },
          { type: "doc", id: cs("hpc-rest-machine") },
          { type: "doc", id: cs("hpc-schedule-shutdown") },
          { type: "doc", id: cs("hpc-clone-image") },
          { type: "doc", id: cs("hpc-level-2-password") },
          { type: "doc", id: cs("hpc-delete-image") },
        ]},
        { type: "category", label: "Block Storage", collapsed: true, items: [
          { type: "doc", id: cs("block-storage") },
          { type: "doc", id: cs("tao-storage-disk") },
          { type: "doc", id: cs("gan-storage-disk-vao-may-ao") },
          { type: "doc", id: cs("cau-hinh-o-dia-cho-may-ao-chay-windows") },
          { type: "doc", id: cs("go-storage-disk-khoi-may-ao") },
          { type: "doc", id: cs("edit-storage-disk") },
          { type: "doc", id: cs("xoa-storage-disk") },
        ]},
        { type: "doc", id: cs("profile-ssh-key") },
        { type: "category", label: "Token", collapsed: true, items: [
          { type: "doc", id: ut("user-token") },
          { type: "doc", id: ut("overview") },
          { type: "doc", id: ut("create-token") },
          { type: "doc", id: ut("revoke-token") },
          { type: "doc", id: ut("fqas") },
        ]},
        { type: "category", label: "Custom Images", collapsed: true, items: [
          { type: "doc", id: cs("custom-images-overview") },
          { type: "doc", id: cs("tai-len-custom-image") },
          { type: "doc", id: cs("xoa-custom-image") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý Instance Template" : lang === "ja" ? "Instance Templateの管理" : "Manage Instance Template", collapsed: true, items: [
          { type: "doc", id: cs("tutorials-quan-ly-instance-template") },
          { type: "doc", id: cs("tutorials-khoi-tao-template-tu-may-ao") },
          { type: "doc", id: cs("tutorials-quan-ly-template-duoc-tao-tu-may-ao") },
          { type: "doc", id: cs("tutorials-tao-instance-tu-template") },
          { type: "doc", id: cs("tutorials-xoa-template") },
        ]},
        { type: "category", label: "NAT Instance", collapsed: true, items: [
          { type: "doc", id: nat("nat_instance") },
          { type: "doc", id: nat("overview-nat-instance") },
          { type: "doc", id: nat("Initial-Setup") },
          { type: "doc", id: nat("use-nat-instance") },
          { type: "doc", id: nat("setting-nat-instance") },
          { type: "doc", id: nat("question") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý NIC (Network Interface Card)" : lang === "ja" ? "NICの管理" : "Manage NIC", collapsed: true, items: [
          { type: "doc", id: nic("nic") },
          { type: "doc", id: nic("initial-setup") },
          { type: "doc", id: nic("create-card-NIC- Primary") },
          { type: "doc", id: nic("disable-NIC-card") },
          { type: "doc", id: nic("enable-NIC-card") },
          { type: "doc", id: nic("add-card-NIC- new") },
          { type: "doc", id: nic("convert-card") },
          { type: "doc", id: nic("edit-ip-address") },
          { type: "doc", id: nic("change-address-MAC") },
          { type: "doc", id: nic("delete-card-NIC") },
        ]},
        { type: "category", label: "Networking", collapsed: true, items: [
          { type: "doc", id: cs("network-all") },
          { type: "doc", id: cs("networking-overview") },
          { type: "category", label: "Gateway", collapsed: true, items: [
            { type: "doc", id: gw("gateway") },
            { type: "doc", id: gw("huong-dan") },
            { type: "doc", id: gw("quan-ly-danh-sach-gateway") },
            { type: "doc", id: gw("quan-ly-route-1-gateway") },
            { type: "doc", id: gw("quan-ly-nat-tung-gateway") },
            { type: "doc", id: gw("quan-ly-no-nat-rule-theo-gateway") },
            { type: "doc", id: gw("tinh-nang-khac") },
          ]},
          { type: "doc", id: cs("quan-ly-floating-ip") },
          { type: "doc", id: cs("Quản lý Subnets") },
          { type: "category", label: "Allow Address Pair", collapsed: true, items: [
            { type: "doc", id: aa("allow-address-pair") },
            { type: "doc", id: aa("initial-setup") },
            { type: "doc", id: aa("create-address-pair") },
            { type: "doc", id: aa("create-address-pair-on-instance-management") },
            { type: "doc", id: aa("delete-address-pair") },
            { type: "doc", id: aa("activity-log") },
            { type: "doc", id: aa("question-1") },
          ]},
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý Security Group" : lang === "ja" ? "Security Groupの管理" : "Manage Security Group", collapsed: true, items: [
          { type: "doc", id: cs("quan-ly-security-group") },
          { type: "doc", id: cs("security-group-filter") },
          { type: "doc", id: cs("security-group-priority-rule") },
        ]},
        { type: "category", label: "Terraform", collapsed: true, items: [
          { type: "doc", id: tf("terraform") },
          { type: "doc", id: tf("overview-terraform") },
          { type: "doc", id: tf("set-up") },
          { type: "doc", id: tf("document-terraform") },
          { type: "doc", id: tf("command-terraform") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý Instance Group (Affinity & Anti-Affinity)" : lang === "ja" ? "Instance Group管理 (Affinity & Anti-Affinity)" : "Manage Instance Group (Affinity & Anti-Affinity)", collapsed: true, items: [
          { type: "doc", id: af("affinity-anti-affinity") },
          { type: "doc", id: af("initial-setup") },
          { type: "doc", id: af("create-instance-group") },
          { type: "doc", id: af("add-instance-instance-group") },
          { type: "doc", id: af("delete-instance-group") },
        ]},
        { type: "category", label: "Notification Bell", collapsed: true, items: [
          { type: "doc", id: nb("notification-bell") },
          { type: "doc", id: nb("initial-setup") },
          { type: "doc", id: nb("show-notification") },
          { type: "doc", id: nb("see-notification-bell") },
        ]},
        { type: "category", label: lang === "vi" ? "Quản lý Project" : lang === "ja" ? "Projectの管理" : "Manage Project", collapsed: true, items: [
          { type: "doc", id: cs("project-structure") },
          { type: "doc", id: cs("quan-ly-project") },
          { type: "doc", id: cs("select-project-when-creating-VPC") },
          { type: "doc", id: cs("header-project") },
        ]},
        { type: "doc", id: cs("new-quota") },
        { type: "category", label: "Auto Schedule", collapsed: true, items: [
          { type: "doc", id: as("auto-schedule-to-on-off-instance") },
          { type: "doc", id: as("initial-setup") },
          { type: "doc", id: as("manage-version-schedules") },
          { type: "doc", id: as("create-new-instance") },
          { type: "doc", id: as("view-detail-instance") },
          { type: "doc", id: as("delete-instance-schedule") },
          { type: "doc", id: as("use-instance-schedules-for-virtual-machines") },
          { type: "doc", id: as("attach-schedule-to-instance") },
          { type: "doc", id: as("detach-schedule-to-instance") },
        ]},
        { type: "category", label: lang === "vi" ? "Lịch snapshot máy ảo" : lang === "ja" ? "VMスナップショットスケジュール" : "VM Snapshot Schedule", collapsed: true, items: [
          { type: "doc", id: cs("schedule-snapshotVM") },
          { type: "doc", id: cs("create-schedule-snapshotVM") },
          { type: "doc", id: cs("viewschedule-snapshotVM") },
          { type: "doc", id: cs("editschedule-snapshotVM") },
          { type: "doc", id: cs("deleteschedule-snapshotVM") },
        ]},
        { type: "category", label: lang === "vi" ? "Lịch snapshot ổ đĩa" : lang === "ja" ? "ディスクスナップショットスケジュール" : "Disk Snapshot Schedule", collapsed: true, items: [
          { type: "doc", id: cs("schedule-snapshotstorage") },
          { type: "doc", id: cs("createschedule-snapshotstorage") },
          { type: "doc", id: cs("viewschedule-snapshotstorage") },
          { type: "doc", id: cs("editschedule-snapshotstorage") },
          { type: "doc", id: cs("deleteschedule-snapshotstorage") },
        ]},
        { type: "category", label: "Lock & Unlock Instance Deletion", collapsed: true, items: [
          { type: "doc", id: li("lock-unlock-instance-deletion") },
          { type: "doc", id: li("initial-setup") },
          { type: "doc", id: li("lock-instance-deletion") },
          { type: "doc", id: li("unlock-instance-deletion") },
        ]},
        { type: "category", label: "Change Network Config", collapsed: true, items: [
          { type: "doc", id: cn("change-network-config") },
          { type: "doc", id: cn("initial-setup") },
          { type: "doc", id: cn("change-static-IP-in-Ubuntu-server") },
          { type: "doc", id: cn("change-static-IP-in-window-server") },
          { type: "doc", id: cn("change-statis-IP-in-CentOS") },
        ]},
        { type: "category", label: "Relation Management", collapsed: true, items: [
          { type: "doc", id: rm("relation-management") },
          { type: "doc", id: rm("initial-setup") },
          { type: "doc", id: rm("tao-tai khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal") },
          { type: "doc", id: rm("tao-work-space") },
          { type: "doc", id: rm("truy-cap-dich-vu") },
          { type: "doc", id: rm("tag-management") },
          { type: "doc", id: rm("component-management") },
          { type: "doc", id: rm("relation-management-detail") },
          { type: "doc", id: rm("datasource-relation-management") },
          { type: "doc", id: rm("dashboard") },
          { type: "doc", id: rm("alert") },
        ]},
      ]},

      // L3: FAQs
      { type: "category", label: L.faq, collapsed: true, items: [
        { type: "doc", id: cs("question-2") },
        { type: "doc", id: cs("question-1") },
        { type: "doc", id: cs("question-") },
        { type: "doc", id: cs("cloud-server") },
      ]},
    ],
  };
}

function replaceCat(items, label, newCat) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === "category" && items[i].label === label) { items[i] = newCat; return true; }
    if (items[i].items && replaceCat(items[i].items, label, newCat)) return true;
  }
  return false;
}

for (const [lang, file, comment] of [
  ["vi", "sidebars-vi.js", "// VI\n"],
  ["en", "sidebars.js", "// EN\n"],
  ["ja", "sidebars-ja.js", "// JA\n"],
]) {
  const fp = path.join(ROOT, file);
  delete require.cache[require.resolve(fp)];
  const sidebar = require(fp);
  const cs = buildCloudServer(lang);
  if (replaceCat(sidebar.tutorialSidebar, "Cloud Server", cs)) {
    const json = JSON.stringify(sidebar, null, 2);
    let js = json.replace(/"(\w+)":/g, "$1: ").replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
    fs.writeFileSync(fp, comment + "module.exports = " + js + ";\n");
    console.log(file + ": Cloud Server restructured");
  }
}
