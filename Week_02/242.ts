// 有效的字母异位词
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s_hash: any = {};
  const t_hash: any = {};
  for (let i = 0; i < s.length; i++) {
    const [sChar, tChar] = [s[i], t[i]];
    s_hash[sChar] = s_hash[sChar] === undefined ? 1 : s_hash[sChar] + 1;
    t_hash[tChar] = t_hash[tChar] === undefined ? 1 : t_hash[tChar] + 1;
  }

  for (let key in s_hash) {
    if (s_hash[key] !== t_hash[key]) return false;
  }

  return true;
}
