using Microsoft.EntityFrameworkCore;
using WebAPI.Data;

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

var app = builder.Build();
app.UseCors(m => {
    m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});


// Console.WriteLine(app.Configuration.GetConnectionString("Default"));
// app.Configuration.GetConnectionString("Default");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
