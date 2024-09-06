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
        pic: require('../../../assets/Strip2.webp')
    },
    {
        id: 'CHOREO',
        title: INTL.DIRECTIONS_PAGE.CHOREO,
        pic: require('../../../assets/Choreo3.webp')
    },
    {
        id: 'LADY_STYLE',
        title: INTL.DIRECTIONS_PAGE.LADY_STYLE,
        pic: require('../../../assets/Lady.webp')
    },
    {
        id: 'TWERK',
        title: INTL.DIRECTIONS_PAGE.TWERK,
        pic: require('../../../assets/Twerk.webp')
    },
    {
        id: 'DANCEHALL',
        title: INTL.DIRECTIONS_PAGE.DANCEHALL.TITLE,
        pic: require('../../../assets/Dancehall.webp')
    },
    {
        id: 'STRETCHING',
        title: INTL.DIRECTIONS_PAGE.STRETCHING,
        pic: require('../../../assets/Stretch.webp')
    }
]