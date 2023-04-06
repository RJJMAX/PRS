namespace PRS.Models; 
public class PO {
    public Vendor? vendor { get; set; }
    public IEnumerable<POline>? POlines { get; set; }
    public decimal POTotal { get; set; }

}