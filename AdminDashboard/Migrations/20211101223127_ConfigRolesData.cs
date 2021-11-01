using Microsoft.EntityFrameworkCore.Migrations;

namespace AdminDashboard.Migrations
{
    public partial class ConfigRolesData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "be5d1504-846b-4f7a-a286-a776c201ca02", "fd0b1a4a-24d2-419d-89cc-35c243ee5e50", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f1ddb36a-0bc0-4781-9120-d5ca80b6b604", "3df62b0b-87fc-462c-b2b4-d398d6f5f113", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "be5d1504-846b-4f7a-a286-a776c201ca02");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f1ddb36a-0bc0-4781-9120-d5ca80b6b604");
        }
    }
}
