using Microsoft.EntityFrameworkCore.Migrations;

namespace MoneyControl.Migrations
{
    public partial class InitialDatabaseMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Newss",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Heading = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Para = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Li1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Li2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Li3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Newss", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Newss");
        }
    }
}
