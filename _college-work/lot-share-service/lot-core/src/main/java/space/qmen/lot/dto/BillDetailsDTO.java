package space.qmen.lot.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class BillDetailsDTO {
    private Double billAmount;
    private Integer billDay;
    private Integer dayOfWeek;
    private Date billDate;
    private String renterName;
    private Integer transactionType;
    private String payMethod;
    private String plateNum;
}
