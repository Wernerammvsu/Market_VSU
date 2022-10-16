using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Persistence.Entities;

namespace Server.Persistence;

public class MarketDbContext : IdentityDbContext
{
    public MarketDbContext(DbContextOptions<MarketDbContext> options)
        : base(options)
    {
    }

    public DbSet<Game> Games { get; set; }
}