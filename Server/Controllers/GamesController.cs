using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Persistence;
using Server.Persistence.Entities;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly MarketDbContext _dbContext;

        public GamesController(MarketDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("top")]
        public async Task<IEnumerable<Game>> GetTopGames()
        {
            return await _dbContext.Games.Take(5).ToListAsync();
        }

        [HttpGet("sale")]
        public IEnumerable<Game> GetGamesOnSale()
        {
            return null;
        }
    }
}