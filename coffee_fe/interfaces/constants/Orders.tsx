export const orderListColumns = [
    {field: 'id', headerName: '주문번호', width: 100},
    {field: 'OrderMenu', headerName: '메뉴명', width: 100},
    {field: 'MenuCategory', headerName: '카테고리', width: 100},
    {field: 'OrderStatus', headerName: '주문상태', width: 100},
    {field: 'OrderDate', headerName: '주문시간', width: 800},
];

export interface orderListRows{
    id : number;
    OrderMenu : string;
    MenuCategory : string;
    OrderStatus: string;
    OrderDate: string;
}
