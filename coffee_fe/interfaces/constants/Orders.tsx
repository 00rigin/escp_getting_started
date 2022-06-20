export const orderListColumns = [
    {field: 'id', headerName: '주문번호', width: 100},
    {field: 'menuName', headerName: '메뉴명', width: 100},
    {field: 'category', headerName: '카테고리', width: 100},
    {field: 'orderStatus', headerName: '주문상태', width: 100},
    {field: 'orderDate', headerName: '주문시간', width: 100},
];

export interface orderListRows{
    id : number;
    menuName : string;
    category : string;
    orderStatus: string;
    orderDate: string;
}