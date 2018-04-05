import { shuffle } from 'lodash'

import Color from 'types/Color'

const colors = Object.keys(Color).map((key) => Color[key] as Color)

export const getRandomColor = (): Color => shuffle(colors)[0]

export const getShuffledColorsExcept = (color: Color): Color[] => {
    const newColors = colors.filter((c) => c !== color)
    return shuffle(newColors)
}
