// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IERC5192.sol";

contract Ticket is ERC1155, Ownable, ERC1155Burnable {
    constructor(address initialOwner) ERC1155("") Ownable(initialOwner) {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "http://localhost/";
    // }

    // Mapping from token ID to locked status
    mapping(uint256 => bool) _locked;

    /// @notice Emitted when the locking status is changed to locked.
    /// @dev If a token is minted and the status is locked, this event should be emitted.
    /// @param tokenId The identifier for a token.
    event Locked(uint256 tokenId);

    /// @notice Emitted when the locking status is changed to unlocked.
    /// @notice currently SBT Contract does not emit Unlocked event
    /// @dev If a token is minted and the status is unlocked, this event should be emitted.
    /// @param tokenId The identifier for a token.
    event Unlocked(uint256 tokenId);

    /// @notice Returns the locking status of an Soulbound Token
    /// @dev SBTs assigned to zero address are considered invalid, and queries
    /// about them do throw.
    /// @param tokenId The identifier for an SBT.
    function locked(uint256 tokenId) external view returns (bool) {
        require(ownerOf(tokenId) != address(0));
        return _locked[tokenId];
    }

    function mint(address to, uint256 tokenId) public onlyOwner {
        require(balanceOf(to) == 0, "MNT01");
        require(_locked[tokenId] != true, "MNT02");

        _locked[tokenId] = true;
        emit Locked(tokenId);

        _mint(to, tokenId, 1, "");
    }

    function mintBatch(address to, uint256[] memory tokenIds) public onlyOwner {
        require(balanceOf(to) == 0, "MNT01");
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(_locked[tokenIds[i]] != true, "MNT02");
            _locked[tokenIds[i]] = true;
            emit Locked(tokenIds[i]);
        }
        _mintBatch(to, tokenIds, new uint256[](tokenIds.length), "");
    }

    function burn(adress owner, uint256 tokenId) public override {
        require(msg.sender == ownerOf(tokenId), "BRN01");
        _burn(owner, tokenId, 1);
    }

    function burnBatch(address owner, uint256[] memory tokenIds) public override {
        require(msg.sender == ownerOf(tokenIds[0]), "BRN01");
        _burnBatch(owner, tokenIds, (new uint256[](tokenIds.length).fill(1)));
    }

    modifier IsTransferAllowed(uint256 tokenId) {
        require(!_locked[tokenId]);
        _;
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(IERC1155, ERC1155) IsTransferAllowed(tokenId) {
        super.safeTransferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override(IERC1155, ERC1155) IsTransferAllowed(tokenId) {
        super.safeTransferFrom(from, to, tokenId, data);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(IERC1155, ERC1155) IsTransferAllowed(tokenId) {
        super.safeTransferFrom(from, to, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC1155) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 _interfaceId)
        public
        view
        override(ERC1155)
        returns (bool)
    {
        return _interfaceId == type(IERC5192).interfaceId || super.supportsInterface(_interfaceId);
    }
}