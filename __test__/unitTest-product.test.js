import ProductController from "../src/controllers/Product";
import Product from "../src/model/Product";

jest.mock("../src/helpers/cloudinary", () => ({
  uploader: {
    upload: jest.fn(),
  },
}));

describe("ProductController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createProduct", () => {
    test("should return 201 when product is created", async () => {
      const req = {
        user: {
          id: "mockedUserId",
        },
        body: {
          title: "Test Product",
          description: "Product description",
          price: 10000,
          color: "Red",
          categories: ["Electronics", "Gadgets"],
          inStock: true,
        },
        file: {
          path: "C:UsersUSERPicturesScreenshotsImage.png",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockUpload = jest
        .fn()
        .mockResolvedValue({ secure_url: "mockedSecureURL" });
      require("../src/helpers/cloudinary").uploader.upload = mockUpload;

      const mockedProductInstance = {
        save: jest.fn().mockResolvedValue({
          _id: "mockedProductId",
          user: "mockedUserId",
          title: "Test Product",
          description: "Product description",
          image: "mockedSecureURL",
          price: 10000,
          color: "Red",
          categories: ["Electronics", "Gadgets"],
          inStock: true,
        }),
      };

      jest.spyOn(Product, "findOne").mockResolvedValue(null);
      jest
        .spyOn(Product.prototype, "save")
        .mockResolvedValue(mockedProductInstance.save());

      await ProductController.createProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(await mockedProductInstance.save());
    });
  });

  describe("getSingleProduct", () => {
    test("should return 200 with the specified product", async () => {
      const req = { params: { id: "mockedProductId" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockedProduct = { _id: "mockedProductId", title: "Test Product" };
      jest.spyOn(Product, "findById").mockResolvedValue(mockedProduct);

      await ProductController.getSingleProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedProduct);
    });
  });

  describe("Delete Product", () => {
    test("should return 404 when deleting non-existing product", async () => {
      // Mock the necessary request and response objects
      const req = { params: { id: "nonexistentProductId" } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

      // Mock the Product.findById function to simulate product not found
      jest.spyOn(Product, "findById").mockResolvedValue(null);

      // Call the deleteProduct method
      await ProductController.deleteProduct(req, res);

      // Expectations
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("Product was not found");
    });
  });
});
