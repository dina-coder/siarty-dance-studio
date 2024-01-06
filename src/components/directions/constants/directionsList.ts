import { INTL } from "../../../common/constants";

type TDirection = {
    id: string;
    title: string;
    pic: string;
};

export const directionsList: TDirection[] = [
    {
        id: 'STRIP_PLASTIC_PRO',
        title: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_PRO,
        pic: require('../../../assets/Strip.png')
    },
    {
        id: 'CHOREO',
        title: INTL.DIRECTIONS_PAGE.CHOREO,
        pic: require('../../../assets/Choreo.png')
    },
    {
        id: 'JAZZ_FUNK',
        title: INTL.DIRECTIONS_PAGE.JAZZ_FUNK,
        pic: require('../../../assets/JazzFunk.png')
    },
    {
        id: 'LADY_STYLE',
        title: INTL.DIRECTIONS_PAGE.LADY_STYLE,
        pic: require('../../../assets/LadyStyle.png')
    },
    {
        id: 'TWERK',
        title: INTL.DIRECTIONS_PAGE.TWERK,
        pic: require('../../../assets/Twerk.png')
    },
    {
        id: 'REGGAETON',
        title: INTL.DIRECTIONS_PAGE.REGGAETON,
        pic: require('../../../assets/Reggaeton.png')
    },
    {
        id: 'STRETCHING',
        title: INTL.DIRECTIONS_PAGE.STRETCHING,
        pic: require('../../../assets/Stretching.png')
    }
]