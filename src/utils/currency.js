const formatter = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'})

export function currency(value) {
  return formatter.format(value)
}
