namespace Server.Persistence.Entities;

public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int discountPercent { get; set; }
    public string? Type { get; set; }
    public string BannerUri { get; set; }
    public string ThumbnailUri { get; set; }
    public float Rating { get; set; }
    public string Developer { get; set; }
    public string Publisher { get; set; }
    public string LongDescription { get; set; }
    public string ReleaseDate { get; set; }
    public string Genres { get; set; }
    public string Features { get; set; }
}