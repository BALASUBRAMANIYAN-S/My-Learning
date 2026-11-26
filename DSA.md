---
title: "DSA"
created: 2026-11-26 15:51
updated: 2026-11-26 15:53
---
# DSA

**hjgr eiuhiog ureg98iuimcnxiu**
![image](images/1
`const kpiTiles = computed(() => [
  { label: 'Students', value: num(k.value.total_students), count: k.value.total_students, icon: 'account-group', color: 'primary', title: 'All students', list: {} },
  { label: 'Average score', value: `${k.value.avg_score_raw || 0}%`, icon: 'target', color: 'warning' },
  { label: 'Below 50%', value: num(k.value.below_limit), count: k.value.below_limit, icon: 'alert', color: 'brown', title: 'Students below 50%', list: { percentage__lt: 50 } },
  { label: 'Not started', value: num(k.value.not_started), count: k.value.not_started, icon: 'progress-clock', color: 'teal', title: 'Students not started (0%)', list: { percentage__lt: 0.01 } },
  { label: 'Pending Students - Claims', value: `${num(k.value.pending_students)} - ${num(k.value.pending_approvals)}`, count: k.value.pending_students, icon: 'clock-alert-outline', color: 'error', title: 'Students with pending claims', list: { pending: '1' } },
]);

const standingRows = computed(() => data.value.standing_tiers.map((d, i, tiers) => ({
  ...d,
  count: data.value.status_distribution[d.key] || 0,
  filter: { percentage__gte: d.min, ...(i ? { percentage__lt: tiers[i - 1].min } : {}) },
})));`
