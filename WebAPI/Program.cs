using System.Net;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Data;
using WebAPI.Extensions;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//custom code
// builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("http://localhost:4200")});
builder.Services.AddCors();
var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
builder.Services.AddControllers().AddNewtonsoftJson();

var secretKey = builder.Configuration.GetSection("AppSettings:Key").Value;
var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(secretKey));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>{
        opt.TokenValidationParameters = new TokenValidationParameters{
            ValidateIssuerSigningKey = true,
            ValidateIssuer = false,
            ValidateAudience = false,
            IssuerSigningKey = key
        };
    });

var app = builder.Build();



app.ConfigureExceptionHandler(app.Environment);

app.UseCors(m => {
    m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
