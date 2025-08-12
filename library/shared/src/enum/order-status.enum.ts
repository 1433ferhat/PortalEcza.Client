export enum OrderStatus {
  None = 0,                     // Tanımsız
  SellerApprovalPending = 1,    // Satıcı onayı bekleniyor
  WaitingForShipment = 2,       // Kargolanmayı bekliyor
  InShipment = 3,               // Kargoda
  BuyerApprovalPending = 4,     // Alıcı onayı bekleniyor
  Completed = 5,                // Teslim edildi
  Cancelled = 6                 // İptal edildi
}
