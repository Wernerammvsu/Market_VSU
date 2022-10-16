namespace Server.Persistence.Entities;

public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int DiscountPercent { get; set; }
    public string Type { get; set; }
    public string BannerUri { get; set; }
    public string ThumbnailUri { get; set; }
}