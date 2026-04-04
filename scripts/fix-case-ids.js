const fs = require('fs');
const fixes = [
  ['load-balancer/allow-ip-cidr', 'load-balancer/Allow-IP-CIDR'],
  ['managed-fpt-kubernetes-engine/Initial-setup', 'managed-fpt-kubernetes-engine/initial-setup'],
  ['dedicated-fpt-kubernetes-engine/Initial-Setup', 'dedicated-fpt-kubernetes-engine/initial-setup'],
  ['managed-fpt-database-engine/Initial-setup', 'managed-fpt-database-engine/initial-setup'],
  ['managed-fpt-database-engine/provision-database-engine', 'managed-fpt-database-engine/Provision-Database-Engine'],
  ['fpt-message-bus/Manage-Queues', 'fpt-message-bus/manage-queues'],
  ['fpt-message-bus/Manage-topics', 'fpt-message-bus/manage-topics'],
];

for (const file of ['sidebars.js', 'sidebars-vi.js', 'sidebars-ja.js']) {
  let c = fs.readFileSync(file, 'utf-8');
  let count = 0;
  for (const [wrong, correct] of fixes) {
    while (c.includes('"' + wrong + '"')) {
      c = c.replace('"' + wrong + '"', '"' + correct + '"');
      count++;
    }
  }
  fs.writeFileSync(file, c);
  console.log(file + ': ' + count + ' case fixes');
}
