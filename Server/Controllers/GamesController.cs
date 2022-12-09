using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Persistence;
using Server.Persistence.Entities;
using System.Linq;

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

        [HttpGet("{id:int}")]
        public async Task<Game?> GetGame(int id) {
            return await _dbContext.Games.FindAsync(id);
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Game>> GetGames(int id) {
            return await _dbContext.Games.ToListAsync();
        }

        [HttpGet("top")]
        public async Task<IEnumerable<Game>> GetTopGames()
        {
            return await _dbContext.Games.Take(5).ToListAsync();
        }

        [HttpGet("sale")]
        public async Task<IEnumerable<Game>> GetGamesOnSale()
        {
            return await _dbContext.Games.ToListAsync();
        }

        [HttpGet("search")]
        public async Task<IEnumerable<Game>> SearchGames(string query)
        {
            query = query.ToLower();
            return await _dbContext.Games
                .Where(g => g.Name.ToLower().Contains(query)
                        || g.Genres.ToLower().Contains(query)
                        || g.Features.ToLower().Contains(query))
                .ToListAsync();
        }

        [HttpPost]
        public async Task<Game> AddNewGame([FromBody] Game newGame) {
            await _dbContext.Games.AddAsync(newGame);
            await _dbContext.SaveChangesAsync();
            return newGame;
        }
        

        
        [HttpGet("popular")]
        public async Task<IEnumerable<Game>> GetPopularGames() {
            return await _dbContext.Games
                .Where(g => g.Rating > 4.6f)
                .ToListAsync();
        }

        [HttpGet("free")]
        public async Task<IEnumerable<Game>> GetFreeGames() {
            return await _dbContext.Games
                .Where(g => g.Price == 0 || g.discountPercent == 100)
                .ToListAsync();
        }

        [HttpGet("genre/{genreName}")]
        public async Task<IEnumerable<Game>> GetGamesByGenre(string genreName) {
            return await _dbContext.Games
                .Where(g => g.Genres.ToLower().Contains(genreName.ToLower()))
                .ToListAsync();
        }


        [HttpGet("feature/{featureName}")]
        public async Task<IEnumerable<Game>> GetGamesByFeature(string featureName) {
            return await _dbContext.Games
                .Where(g => g.Features.ToLower().Contains(featureName.ToLower()))
                .ToListAsync();
        }

        [HttpDelete("{id:int}")]
        public async Task DeleteGame(int id)
        {
            var game = await _dbContext.Games.FindAsync(id);

            if (game is not null)
            {
                _dbContext.Games.Remove(game);
            }

            await _dbContext.SaveChangesAsync();
        }
    }
}