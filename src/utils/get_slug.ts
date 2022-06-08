// https://github.com/simple-icons/simple-icons/blob/develop/scripts/utils.js
const TITLE_TO_SLUG_REPLACEMENTS: Record<string, string> = {
  '+': 'plus',
  '.': 'dot',
  '&': 'and',
  đ: 'd',
  ħ: 'h',
  ı: 'i',
  ĸ: 'k',
  ŀ: 'l',
  ł: 'l',
  ß: 'ss',
  ŧ: 't',
}

const TITLE_TO_SLUG_CHARS_REGEX = RegExp(
  `[${Object.keys(TITLE_TO_SLUG_REPLACEMENTS).join('')}]`,
  'g'
)

const TITLE_TO_SLUG_RANGE_REGEX = /[^a-z0-9]/g

export const getSlug = ({title}: {title: string}) =>
  title
    .toLowerCase()
    .replace(
      TITLE_TO_SLUG_CHARS_REGEX,
      char => TITLE_TO_SLUG_REPLACEMENTS[char]
    )
    .normalize('NFD')
    .replace(TITLE_TO_SLUG_RANGE_REGEX, '')
